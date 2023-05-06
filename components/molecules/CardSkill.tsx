import { FC } from 'react';
import { JSXElement } from '@/interface/all.interface';
import { Text, Title } from '../atom';

interface Props {
  children: JSXElement;
  className?: string;
  description: string;
  title: string;
}

export const CardSkill: FC<Props> = ({ ...props }) => {
  return (
    <div
      className={`${props.className} w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700`}
    >
      <Title level='h3' text={props.title} classname='mb-3' />
      <Text text={props.description} classname='text-gray-600' />
      <ul className='my-4 space-y-3'>{props.children}</ul>
    </div>
  );
};
