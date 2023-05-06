import { FC } from 'react';

interface Props {
  text?: string;
  className?: string;
}

export const Button: FC<Props> = ({ ...props }) => {
  return (
    <button
      className={`${props.className} bg-indigo-600 transition-colors shadow-md shadow-indigo-500/10 hover:bg-indigo-500 text-white font-medium tracking-wide py-2 px-4 rounded-lg`}
      id='btn-contact'
    >
      Contacto
    </button>
  );
};
