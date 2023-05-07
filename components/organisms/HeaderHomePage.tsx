import { FC } from 'react';
import { Title } from '../atom';

interface Props {
  className?: string;
  id: string;
}

export const HeaderHomePage: FC<Props> = ({ ...props }) => {
  return (
    <header
      id={props.id}
      className={`${props.className} flex flex-col text-center justify-center dark:bg-slate-800 dark:text-white h-screen`}
    >
      <Title level='h1' text='MARCOS ALANYA' />
      <Title level='h2' text='FULL STACK DEVELOPER' />
    </header>
  );
};
