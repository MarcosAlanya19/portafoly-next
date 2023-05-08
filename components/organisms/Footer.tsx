import { FC } from 'react';
import { ICONS_MAP, Icon } from '../atom';

interface IFooter {
  icon: keyof typeof ICONS_MAP
  href: string
}

const iconFooter: IFooter[] = [
  {
    icon: 'facebook',
    href: 'https://www.facebook.com/Marcos.AlanyaPacheco19/',
  },
  {
    icon: 'instagram',
    href: 'https://www.instagram.com/marxap/',
  },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/marcosalanya19/',
  },
  {
    icon: 'github',
    href: 'https://github.com/MarcosAlanya19',
  },
];

export const Footer: FC = () => {
  return (
    <div className='bg-amber-200 dark:bg-slate-700 flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4'>
      <div>
        <p className='text-gray-800 dark:text-white text-center md:text-left'>
          &copy; 2023
          <span className='text-gray-900 font-bold dark:text-white'>
            {' '}
            Marcos Alanya.
          </span>{' '}
          Todos los derechos reservados.
        </p>
      </div>
      <div className='flex items-center gap-3'>
        {iconFooter.map((data, index) => (
          <a target='_blank' className='rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 p-3 cursor-pointer' key={index} href={data.href}>
            <Icon
              type={data.icon}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
