import { FC } from 'react';

interface Props {
  classname?: string;
  href: string;
  text?: string;
  variant?: 'button';
}

export const Anchor: FC<Props> = ({ ...props }) => {
  const button =
    'text-center w-full dark:bg-sky-500 bg-amber-500 transition-colors shadow-md dark:shadow-sky-500/10 shadow-amber-500/10 dark:hover:bg-sky-400 hover:bg-amber-400 text-white font-medium tracking-wide py-2 px-4 rounded-lg';

  return (
    <a
      className={`${props.classname} ${props.variant === 'button' && button}`}
      href={props.href}
      target='_blank'
    >
      {props.text}
    </a>
  );
};
