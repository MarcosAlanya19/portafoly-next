// import { Layout } from '@/layout/Layout';
import { FC } from 'react';
// import ContactHomePage from '../organisms/ContactHomePage';

import * as HP from '../organisms';
import { useThemeStore } from "@/store/useStore";
import Head from "next/head";
import { VerticalText } from "../atom";
import { Navbar } from "../organisms";
import ContactHomePage from '../organisms/ContactHomePage';


// export const HomePageTemplate: FC = () => {
//   const scrollToElement = () => {
//     // ref1.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <Layout pagina='Inicio'>

//     </Layout>
//   );
// };


// import { VerticalText } from '@/components/atom';
// import { Footer, Navbar } from '@/components/organisms';
// import { JSXElement } from '@/interface/all.interface';
// import { useThemeStore } from '@/store/useStore';
// import Head from 'next/head';
// import { FC } from 'react';

interface Props {
  pagina: string;
  className?: string;
}

export const HomePageTemplate: FC<Props> = ({ ...props }) => {
  const { isDarkMode } = useThemeStore();
  const scrollToElement = () => {
    // ref1.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Marcos - {props.pagina}</title>
        <meta name='description' content='Marcos Alanya Pacheco, developer' />
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
        <div className='grid'>
          <div className='dark:bg-slate-800'></div>
          <div className={`${props.className} dark:bg-slate-800 dark:text-white`}>
            <HP.HeaderHomePage />
      <button className='px-40' onClick={scrollToElement}>
        click
      </button>
      <HP.AboutMeHomePage />
      <HP.SkillsHomePage />
        <HP.ProjectHomePage />
      <div>
      <ContactHomePage />
      </div>
          </div>
          <div className='dark:bg-slate-800'></div>
        </div>
        <HP.Footer />
      </main>
    </>
  );
};
