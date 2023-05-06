import { config } from '@/config';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button, Icon, TogleDark } from '../atom';
import { NavOptions } from '../molecules';

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <section
      className={`bg-white fixed z-50 w-full dark:bg-slate-800 border-b-2 border-gray-300 dark:border-gray-700`}
    >
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <div className='flex items-center'>
          <Link
            className='text-gray-900 font-bold text-lg tracking-wider dark:text-white'
            href={config.ROUTES.INDEX}
          >
            MARCOS
          </Link>
          <nav className='ml-6 hidden md:block'>
            <ul className='flex space-x-4 items-center'>
              <NavOptions />
            </ul>
          </nav>
        </div>


        <div className='flex items-center'>
          <TogleDark />

          {isOpen ? (
            <Icon className='md:hidden' onClick={handleToggle} type='close' />
          ) : (
            <Icon className='md:hidden' onClick={handleToggle} type='open' />
          )}


          <Button text='Contacto' className='ml-4 md:ml-6' />
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}
        id='navbar'
      >
        <ul className='mt-4 border-t-2'>
          <NavOptions className='block py-2 px-4' />
        </ul>
      </div>
    </section>
  );
};
