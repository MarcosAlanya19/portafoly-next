/* eslint-disable react/no-unescaped-entities */
import { Layout } from '@/layout/Layout';
import { FC } from 'react';
import {
  AboutMeHomePage,
  ContactHomePage,
  HeaderHomePage,
  ProjectHomePage,
  SkillsHomePage,
} from '../organisms';

export const HomePageTemplate: FC = () => {
  return (
    <Layout pagina='Inicio' className='divide-y-2'>
      <HeaderHomePage className='h-screen' />
      <AboutMeHomePage />
      <SkillsHomePage />
      <ProjectHomePage />
      <ContactHomePage />
    </Layout>
  );
};
