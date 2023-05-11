import { JSXElement } from '@/interface/all.interface';
import { FC } from 'react';
import { Title } from './Title';

interface Props {
  children: JSXElement;
  className?: string;
  title: string;
  id: string;
}

export const Section: FC<Props> = ({ ...props }) => {
  return (
    <section
      id={props.id}
      className={`${props.className} px-7 md:px-20 lg:px-40 py-1 pb-10 dark:bg-slate-800 dark:text-white`}
    >
      <Title level='h2' text={props.title} classname='text-center pt-10 pb-20' />
      {props.children}
    </section>
  );
};
