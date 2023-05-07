import { FC } from 'react';
import { Section } from '../atom';
import { CardSkill } from '../molecules';

const skills = {
  database: [
    {
      text: 'PostGreSQL',
      badge: '',
    },
    {
      text: 'MongoDB',
      badge: '',
    },
    {
      text: 'MySQL',
      badge: '',
    },
  ],
  tools: [
    {
      text: 'Git',
      badge: 'Control de versiones',
    },
    {
      text: 'Visual Studio Code',
      badge: 'Editor de código',
    },
  ],
  languages: [
    {
      text: 'HTML',
      badge: '',
      className: 'hidden md:block',
    },
    {
      text: 'CSS',
      badge: '',
      className: 'hidden md:block',
    },
    {
      text: 'JavaScript',
      badge: '',
    },
    {
      text: 'TypeScript',
      badge: '',
    },
    {
      text: 'Java',
      badge: '',
    },
    {
      text: 'Node',
      badge: '',
    },
  ],
  framework: [
    {
      text: 'Tailwind',
      badge: '',
    },
    {
      text: 'Next',
      badge: '',
    },
    {
      text: 'React',
      badge: 'Libreria',
    },
    {
      text: 'Express',
      badge: '',
    },
    {
      text: 'Spring Boot',
      badge: '',
    },
    {
      text: 'Nest',
      badge: '',
    },
  ],
};

interface IListItem {
  text: string;
  badge?: string;
  className?: string;
}

const ListItem: FC<IListItem> = ({ ...props }) => (
  <li className={props.className}>
    <a
      href='#'
      className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
    >
      <span className='flex-1 ml-3 whitespace-nowrap'>{props.text}</span>
      {props.badge && (
        <span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400'>
          {props.badge}
        </span>
      )}
    </a>
  </li>
);

export const SkillsHomePage: FC = () => {
  return (
    <Section title='Habilidades'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3'>
        <CardSkill className='lg:row-span-2' title='Lenguajes' description=''>
          {skills.languages.map((data, index) => (
            <ListItem
              className={data.className}
              key={index}
              text={data.text}
              badge={data.badge}
            />
          ))}
        </CardSkill>

        <CardSkill className='lg:row-span-2' title='Framework' description=''>
          {skills.framework.map((data, index) => (
            <ListItem key={index} text={data.text} badge={data.badge} />
          ))}
        </CardSkill>

        <CardSkill className='lg:row-span-1' title='Base de datos' description=''>
          {skills.database.map((data, index) => (
            <ListItem key={index} text={data.text} badge={data.badge} />
          ))}
        </CardSkill>

        <CardSkill className='lg:row-span-1' title='Herramientas' description=''>
          {skills.tools.map((data, index) => (
            <ListItem key={index} text={data.text} badge={data.badge} />
          ))}
        </CardSkill>
      </div>
    </Section>
  );
};
