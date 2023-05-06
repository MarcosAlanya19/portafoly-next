import { config } from '@/config';
import { FC, useEffect, useState } from 'react';
import { ICONS_MAP, Section } from '../atom';
import { CardProject } from '../molecules';

// const cardLanguages: Array<keyof typeof ICONS_MAP> = ;

const cardData = [
  {
    image: config.IMG.PROJECT.GUITAR,
    title: 'Guitar-LA',
    description:
      'Proyecto realizado con Next, respecto a una tienda de guitarras, con un carrito de compras.',
    languages: ['next', 'typescript', 'strapi', 'postgresql'] as Array<
      keyof typeof ICONS_MAP
    >,
    link_page: 'https://guitar-la-proyect.vercel.app/',
    link_frontend: 'https://github.com/MarcosAlanya19/front-guitarLA-JAM',
    link_backend: 'https://github.com/MarcosAlanya19/front-guitarLA-JAM',
    backend: 'Strapi',
    frontend: 'Next',
  },
];

export const ProjectHomePage: FC = () => {
  const [isLike, setNotLike] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('isLike');
    if (storedValue) {
      setNotLike(storedValue === 'true');
    }
  }, []);

  const handleToggle = () => {
    const newValue = !isLike;
    setNotLike(newValue);
    localStorage.setItem('isLike', String(newValue));
  };

  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          className='fill-current text-amber-300 pb-4 dark:text-slate-700'
          d='M0,128L0,128L288,128L288,160L576,160L576,128L864,128L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
        ></path>
      </svg>
      <Section title='Mis proyectos' className='bg-amber-300 dark:bg-[#334155]'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {cardData.map((data, index) => (
            <CardProject
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
              link_frontend={data.link_frontend}
              link_backend={data.link_backend}
              link_page={data.link_page}
              languages={data.languages}
              backend={data.backend}
              frontend={data.frontend}
            />
          ))}
        </div>
      </Section>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          className='fill-current text-amber-300 dark:text-slate-700'
          d='M0,128L0,288L288,288L288,96L576,96L576,256L864,256L864,320L1152,320L1152,192L1440,192L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z'
        ></path>
      </svg>
    </>
  );
};
