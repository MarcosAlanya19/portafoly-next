import { FC } from 'react';
import { Section } from '../atom';
import { CardProject } from '../molecules';

export const ProjectHomePage: FC = () => {
  return (
    <Section title='Mis proyectos'>
      <div className='grid md:grid-cols-3 gap-10'>
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </Section>
  );
};
