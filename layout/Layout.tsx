import { VerticalText } from '@/components/atom';
import { Footer, Navbar } from '@/components/organisms';
import { JSXElement } from '@/interface/all.interface';
import { useThemeStore } from '@/store/useStore';
import Head from 'next/head';
import { FC } from 'react';

interface Props {
  pagina: string;
  children: JSXElement;
  className?: string;
}

export const Layout: FC<Props> = ({ ...props }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <>
      <Head>
        <title>Marcos - {props.pagina}</title>
        <meta
          name='description'
          content='Soy Marcos, un desarrollador fullstack con experiencia en la creación de aplicaciones web. Explora mi portafolio para ver mis proyectos, habilidades en desarrollo frontend y backend, y mi pasión por la tecnología.'
        />
        <meta
          name='keywords'
          content='Desarrollador Fullstack, Portafolio, Desarrollo web, Frontend, Backend, Aplicaciones web, Programador, Fullstack, Frontend, Estudiante, Ingeniero de sistemas, Proyectos, Experiencia, Habilidades, Tecnologías, Diseño web, Desarrollo web, Aplicaciones, Sitios web'
        />
        <meta name='robots' content='index,follow' />
        <link rel='canonical' href='https://portafoly-next.vercel.app/' />
      </Head>
      <main className={`${isDarkMode ? 'dark' : ''}`}>
        <VerticalText
          text='marcosalanya19@gmail.com'
          type='vertical-text'
          direction='left-0'
        />
        <VerticalText
          text='Marcos Alanya Pacheco'
          type='vertical-text2'
          direction='right-0'
        />
        <Navbar />
        <div className=''>
          <div className='dark:bg-slate-800'></div>
          <div className={`${props.className} dark:bg-slate-800 dark:text-white`}>
            {props.children}
          </div>
          <div className='dark:bg-slate-800'></div>
        </div>
        <Footer />
      </main>
    </>
  );
};
