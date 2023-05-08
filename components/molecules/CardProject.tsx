import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { Anchor, ICONS_MAP, Icon, Text, Title } from '../atom';

interface Props {
  image: string;
  title: string;
  description: string;
  languages: Array<keyof typeof ICONS_MAP>;
  link_page?: string;
  link_frontend?: string;
  link_backend?: string;
  frontend?: string;
  backend?: string;
}

export const CardProject: FC<Props> = ({ ...props }) => {
  const [isLike, setNotLike] = useState(false);
  const projectId = 'unique-project-id'; // Asigna un identificador único a cada CardProject

  useEffect(() => {
    const storedValue = localStorage.getItem(projectId);
    if (storedValue) {
      setNotLike(storedValue === 'true');
    }
  }, [projectId]);

  const handleToggle = () => {
    const newValue = !isLike;
    setNotLike(newValue);
    localStorage.setItem(projectId, String(newValue));
  };

  return (
    <div className='w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3 dark:bg-gray-800 dark:border-gray-700'>
      <div className='relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
        <Image
          src={props.image}
          alt='img-project'
          className='w-full'
          width={500}
          height={400}
        />
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
        {isLike ? (
          <Icon
            type='heart'
            className='text-xl !absolute top-4 right-4 text-red-500'
            onClick={handleToggle}
          />
        ) : (
          <Icon
            type='empty_heart'
            className='text-xl !absolute top-4 right-4 hover:text-red-500'
            onClick={handleToggle}
          />
        )}
      </div>

      <div className='px-3 pt-3'>
        <div className='flex items-center justify-between'>
          <Title level='h3' text={props.title} />
        </div>

        <div className='divide-y-2 divide-yellow-500 dark:divide-slate-500 '>
          <Text classname='py-1 px-1 text-justify' text={props.description} />
          {props.frontend && (
            <div className='py-1 flex justify-between px-1'>
              <Text text={'Frontend:'} />
              <Text text={props.frontend} />
            </div>
          )}
          {props.backend && (
            <div className='py-1 flex px-1 justify-between'>
              <Text text={'Backend:'} />
              <Text text={props.backend} />
            </div>
          )}
        </div>

        <div className='group py-5 w-full inline-flex flex-wrap justify-center items-center gap-3'>
          {props.languages.map((icon, index) => (
            <Icon
              className='rounded-full p-3 bg-amber-400 hover:bg-amber-300 dark:hover:bg-sky-400 dark:bg-sky-500'
              key={index}
              type={icon}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 grid-rows-2 pb-2 gap-2 px-2 md:px-6'>
        {props.link_page && (
          <Anchor
            href={props.link_page}
            text='Ver demo'
            variant='button'
            className='col-span-2 w-full'
          />
        )}

        <div className='w-full col-span-2 gap-2 flex justify-between '>
          {props.link_frontend && (
            <Anchor href={props.link_frontend} text='Frontend' variant='button' className='w-full' />
          )}
          {props.link_backend && (
            <Anchor href={props.link_backend} text='Backend' variant='button' className='w-full' />
          )}
        </div>
      </div>
    </div>
  );
};
