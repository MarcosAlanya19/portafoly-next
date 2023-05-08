import { Refs, useRefStore } from '@/store/useStore';
import { FC } from 'react';

interface Props {
  className?: string;
}

interface IData {
  text: string;
  id: keyof Refs;
}

const dataScroll: IData[] = [
  {
    text: 'Inicio',
    id: 'data1',
  },
  {
    text: 'Sobre mí',
    id: 'data2',
  },
  {
    text: 'Mis Habilidades',
    id: 'data3',
  },
  {
    text: 'Mis Proyectos',
    id: 'data4',
  },
];

export const NavOptions: FC<Props> = ({ ...props }) => {
  const { scrollToElement } = useRefStore();

  return (
    <>
      {dataScroll.map((data, index) => (
        <li
          key={index}
          className={`${props.className} cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out`}
          onClick={() => scrollToElement(data.id)}
        >
          {data.text}
        </li>
      ))}
    </>
  );
};
