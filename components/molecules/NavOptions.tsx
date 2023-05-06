import { FC } from 'react';

interface Props {
  className?: string;
}

export const NavOptions: FC<Props> = ({ ...props }) => {
  return (
    <>
      <li>
        <a
          href='#!'
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
        >
          Inicio
        </a>
      </li>
      <li>
        <a
          href='#about-me'
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
        >
          Sobre mí
        </a>
      </li>
      <li>
        <a
          href='#projects'
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
        >
          Proyectos
        </a>
      </li>
    </>
  );
};
