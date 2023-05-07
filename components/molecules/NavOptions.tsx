import { useRefStore } from '@/store/useStore';
import { FC, useRef } from 'react';

interface Props {
  className?: string;
}

export const NavOptions: FC<Props> = ({ ...props }) => {
  const { scrollToElement } = useRefStore();

  return (
    <>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          onClick={() => scrollToElement('data1')}
        >
          Inicio
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          onClick={() => scrollToElement('data2')}
        >
          Sobre mí
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          onClick={() => scrollToElement('data3')}
        >
          Mis habilidades
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          onClick={() => scrollToElement('data4')}
        >
          Mis Proyectos
        </button>
      </li>
    </>
  );
};
