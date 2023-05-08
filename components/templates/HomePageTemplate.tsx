import { Layout } from '@/layout/Layout';
import { useRefStore } from '@/store/useStore';
import { FC, useEffect } from 'react';
import * as HP from '../organisms';

export const HomePageTemplate: FC = () => {
  useEffect(() => {
    useRefStore.setState((state: any) => ({
      refs: {
        ...state.refs,
        data1: document.getElementById('header'),
        data2: document.getElementById('about_me'),
        data3: document.getElementById('skills'),
        data4: document.getElementById('projects'),
        data5: document.getElementById('contact'),
      },
    }));
  }, []);

  return (
    <Layout>
      <HP.HeaderHomePage id='header' />
      <HP.AboutMeHomePage id='about_me' />
      <HP.SkillsHomePage id='skills' />
      <HP.ProjectHomePage id='projects' />
      <HP.ContactHomePage id='contact' />
    </Layout>
  );
};
