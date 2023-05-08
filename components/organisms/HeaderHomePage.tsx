import { FC } from 'react';
import { Title, WaveTop } from '../atom';

interface Props {
  className?: string;
  id: string;
}

export const HeaderHomePage: FC<Props> = ({ ...props }) => {
  return (
    <>
      <header
        id={props.id}
        className={`${props.className} bg-no-repeat bg-cover bg-center bg-[url('/img/header-light.jpg')] dark:bg-[url('/img/header-dark.jpg')] dark:bg-slate-800 dark:text-white`}
      >
        <div className='h-screen flex flex-col text-center justify-center'>
          <Title level='h1' text='MARCOS ALANYA' />
          <Title level='h2' text='FULL STACK DEVELOPER' />
        </div>
        <WaveTop />
      </header>
    </>
  );
};
