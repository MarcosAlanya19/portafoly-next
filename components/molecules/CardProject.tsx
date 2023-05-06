import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { Button, ICONS_MAP, Icon, Text, Title } from '../atom';

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
    <div className='w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow p-3 sm:p-2 dark:bg-gray-800 dark:border-gray-700'>
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
      <div className='px-6 pt-6'>
        <div className='mb-3 flex items-center justify-between'>
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
              className='rounded-full p-3 bg-amber-400 hover:bg-amber-300'
              key={index}
              type={icon}
            />
          ))}
        </div>
      </div>
      <div className='flex pb-4 justify-between gap-2 px-6'>
        {props.link_page && (
          <a target='_blank' href={props.link_page}>
            <Button text='Demo' className='w-full' />
          </a>
        )}

        {props.link_frontend && (
          <a target='_blank' href={props.link_frontend}>
            <Button text='Frontend' className='w-full' />
          </a>
        )}

        {props.link_backend && (
          <a target='_blank' href={props.link_backend}>
            <Button text='Backend' className='w-full' />
          </a>
        )}
      </div>
    </div>
  );
};
