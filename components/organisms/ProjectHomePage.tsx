import { config } from '@/config';
import { FC, useEffect, useState } from 'react';
import { ICONS_MAP, Section, WaveBottom, WaveTop } from '../atom';
import { CardProject } from '../molecules';

const cardData = [
  {
    image: config.IMG.PROJECT.ENCRYP,
    title: 'Desafío de Oracle ONE',
    description:
      'Un encriptador basico donde se cambian las vocales por otras letras.',
    languages: ['html' ,'css' ,'typescript'] as Array<keyof typeof ICONS_MAP>,
    link_page: 'https://challenge1-one.netlify.app/',
    link_frontend: 'https://github.com/MarcosAlanya19/Challenge-1-Oracle-One',
    link_backend: '',
    backend: '',
    frontend: 'Vanilla',
  },
  {
    image: config.IMG.PROJECT.QUOTES,
    title: 'Seguimiento Pacientes - Veterinaria',
        description:
      'Proyecto realizado con React, respecto a un area administrativa para una veterinaria.',
    languages: ['react', 'typescript', 'tailwind'] as Array<keyof typeof ICONS_MAP>,
    link_page: 'https://front-create-quotes.netlify.app/',
    link_frontend: 'https://github.com/MarcosAlanya19/front-create-quotes',
    link_backend: '',
    backend: '',
    frontend: 'React',
  },
  {
    image: config.IMG.PROJECT.GUITAR,
    title: 'Guitar-LA',
    description:
      'Proyecto realizado con Next, respecto a una tienda de guitarras, con un carrito de compras.',

    languages: ['next', 'typescript', 'strapi', 'postgresql', 'tailwind'] as Array<
      keyof typeof ICONS_MAP
    >,
    link_page: 'https://guitar-la-proyect.vercel.app/',
    link_frontend: 'https://github.com/MarcosAlanya19/front-guitarLA-JAM',
    link_backend: 'https://github.com/MarcosAlanya19/backend-guitarLA-JAM',
    backend: 'Strapi',
    frontend: 'Next',
  },
];

interface Props {
  id: string;
}

export const ProjectHomePage: FC<Props> = ({ ...props }) => {
  return (
    <>
      <WaveTop />
      <Section
        id={props.id}
        title='Mis proyectos'
        className='bg-amber-300 dark:!bg-slate-700'
      >
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
      <WaveBottom />
    </>
  );
};
