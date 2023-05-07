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
        <meta name='description' content='Marcos Alanya Pacheco, developer, programador, fullstack, frontend, estudiante, ingeniero de sistemas, Marcos, Alanya Pacheco' />
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
          <div className={`${props.className} dark:bg-slate-800 dark:text-white`}>{props.children}</div>
          <div className='dark:bg-slate-800'></div>
        </div>
        <Footer />
      </main>
    </>
  );
};
