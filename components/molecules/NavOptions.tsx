import { FC, useRef } from 'react';

interface Props {
  className?: string;
}

export const NavOptions: FC<Props> = ({ ...props }) => {
  const projectsRef = useRef<HTMLDivElement>(null); // Cambia el tipo HTMLDivElement por el tipo correcto de tu elemento


  return (
    <>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          // onClick={() => handleClick(refs.index)}
        >
          Inicio
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          // onClick={() => handleClick(refs.about_me)}
        >
          Sobre mí
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          // onClick={() => handleClick(refs.skills)}
        >
          Mis habilidades
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          // onClick={() => handleClick(refs.projects)}
        >
          Mis Proyectos
        </button>
      </li>
      <li>
        <button
          className={`${props.className} text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
        >
          Contacto
        </button>
      </li>
    </>
  );
};
