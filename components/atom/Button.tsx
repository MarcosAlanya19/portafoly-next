import { FC } from 'react';

export interface IButton {
  text: string;
  className?: string;
}

export const Button: FC<IButton> = ({ ...props }) => {
  return (
    <button
      className={`${props.className} dark:bg-sky-500 bg-amber-500 transition-colors shadow-md dark:shadow-sky-500/10 shadow-amber-500/10 dark:hover:bg-sky-400 hover:bg-amber-400 text-white font-medium tracking-wide py-2 px-4 rounded-lg`}
      id='btn-contact'
    >
      {props.text}
    </button>
  );
};
