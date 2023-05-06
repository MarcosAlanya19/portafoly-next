import { JSXElement } from '@/interface/all.interface';
import { FC } from 'react';
import { Title } from './Title';

interface Props {
  children: JSXElement;
  className?: string;
  title: string;
}

export const Section: FC<Props> = ({ ...props }) => {
  return (
    <section
      className={`${props.className} px-10 md:px-40 pb-10 dark:bg-slate-800 dark:text-white`}
    >
      <Title level='h2' text={props.title} classname='text-center p-10' />
      {props.children}
    </section>
  );
};
