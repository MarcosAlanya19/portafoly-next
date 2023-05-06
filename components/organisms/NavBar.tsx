import { FC, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button, Icon } from '../atom';
import { NavOptions } from '../molecules/NavOptions';

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`bg-white fixed z-50 w-full dark:bg-slate-800 border-b-2 border-gray-300 dark:border-gray-700`}
    >
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <div className='flex items-center'>
          <a href='#' className='text-gray-900 font-bold text-lg tracking-wider'>
            MARCOS
          </a>
          <nav className='ml-6 hidden md:block'>
            <ul className='flex space-x-4 items-center'>
              <NavOptions />
            </ul>
          </nav>
        </div>
        <div className='flex items-center'>
          {isOpen ? (
            <Icon classname='md:hidden' onClick={handleToggle} type='close' />
          ) : (
            <Icon classname='md:hidden' onClick={handleToggle} type='open' />
          )}
          <Button text='Contacto' className='ml-4 md:ml-6' />
        </div>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}
        id='navbar'
      >
        <i
          className='fas fa-times close-nav text-gray-600'
          onClick={handleToggle}
        ></i>

        <ul className='mt-4'>
          <NavOptions className='block py-2 px-4' />
        </ul>
      </div>
    </nav>
  );
};
