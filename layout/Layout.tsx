import { VerticalText } from '@/components/atom';
import { Footer, Navbar } from '@/components/organisms';
import { JSXElement } from '@/interface/all.interface';
import { useThemeStore } from '@/store/useStore';
import { NextSeo } from 'next-seo';
import { FC } from 'react';

interface Props {
  children: JSXElement;
  className?: string;
}

export const Layout: FC<Props> = ({ ...props }) => {
  const { isDarkMode } = useThemeStore();
  const pageKeywords = [
    'Marcos Alanya',
    'Marcos Alanya Pacheco',
    'Desarrollador Fullstack',
    'Portafolio',
    'Desarrollo web',
    'Frontend',
    'Backend',
    'Aplicaciones web',
    'Programador',
    'Fullstack',
    'Frontend',
    'Estudiante',
    'Ingeniero de sistemas',
    'Proyectos',
    'Experiencia',
    'Habilidades',
    'Tecnologías',
    'Diseño web',
    'Desarrollo web',
    'Aplicaciones',
    'Sitios web',
  ];

  return (
    <>
      <NextSeo
        title='Marcos Alanya - Portafolio'
        description='Soy Marcos, un desarrollador fullstack con experiencia en la creación de aplicaciones web. Explora mi portafolio para ver mis proyectos, habilidades en desarrollo frontend y backend, y mi pasión por la tecnología.'
        canonical='https://marcos-alanya-portafolio.vercel.app/'
        additionalMetaTags={[
          {
            property: 'keywords',
            content: pageKeywords.join(', '),
          },
          {
            property: 'robots',
            content: 'index,follow',
          },
        ]}
        openGraph={{
          url: 'https://marcos-alanya-portafolio.vercel.app/',
          title: 'Portafolio Marcos Alanya Pacheco',
          description:
            'Soy Marcos, un desarrollador fullstack con experiencia en la creación de aplicaciones web. Explora mi portafolio para ver mis proyectos, habilidades en desarrollo frontend y backend, y mi pasión por la tecnología.',
          images: [
            {
              url: 'https://lh3.googleusercontent.com/pw/AJFCJaXnWYKCg3tI1K8WbxFuVAsymSILKcXaKyYO4PU3_zMC0GKDjZugpg9Fr86_wSkw7gSW0ZQngIp9ySnSZztEUxww3iV8QLj88-tSdustGEXreYUxYMk9_lJKHe0M52T706d6wPPPs6zeLiTmBHbHZrwozw=w778-h973-s-no?authuser=0',
              width: 900,
              height: 800,
              alt: 'first-image',
              type: 'portafolio',
            },
            {
              url: 'https://lh3.googleusercontent.com/pw/AJFCJaVjq0N3ygQx9Bo5T8LBGU2tOdbE6FTAmZ5epTmsatYOlUzBfdl2afb86tZ0eh1kSSiK_vgV9lG2IUxxDrjybBHE4mhVAoGXJSFrTBbYnlEE0lzq426BSJQ5nFw3--O60VTRvTun2Bzd4l8aQVV6Xv2CGw=w778-h973-s-no?authuser=0',
              width: 900,
              height: 800,
              alt: 'second-image',
              type: 'portafolio',
            },
          ],
          siteName: 'SiteName',
        }}
      />

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
