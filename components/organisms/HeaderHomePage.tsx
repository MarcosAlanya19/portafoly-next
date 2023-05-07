import { FC } from 'react';
import { Title } from '../atom';

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
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          className='fill-current text-amber-300 pb-4 dark:text-slate-700'
          d='M0,128L0,128L288,128L288,160L576,160L576,128L864,128L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
        ></path>
      </svg>
      </header>
    </>
  );
};
