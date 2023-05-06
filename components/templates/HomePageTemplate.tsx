import { Layout } from '@/layout/Layout';
import { FC } from 'react';
import * as HP from '../organisms';

export const HomePageTemplate: FC = () => {
  return (
    <Layout pagina='Inicio'>
      <HP.HeaderHomePage />
      <HP.AboutMeHomePage />
      <HP.SkillsHomePage />
      <HP.ProjectHomePage />
      <HP.ContactHomePage />
    </Layout>
  );
};
