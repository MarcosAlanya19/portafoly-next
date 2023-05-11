import { FC } from 'react';
import { Title, WaveTop } from '../atom';
import Image from 'next/image';

interface Props {
  className?: string;
  id: string;
}

export const HeaderHomePage: FC<Props> = ({ ...props }) => {
  return (
    <>
      <header
        id={props.id}
        className={`${props.className} bg-no-repeat bg-cover bg-center bg-[url('/img/header-light.jpg')] dark:bg-[url('/img/header-dark.jpg')] dark:text-white`}
      >
        {/* <Image
          alt='img-header'
          className='w-full h-screen object-cover'
          height={1000}
          src={'/img/header-light.jpg'}
          width={1700}
        /> */}
        <div className='h-screen flex flex-col text-center justify-center'>
          <Title level='h1' text='MARCOS ALANYA' />
          <Title level='h2' text='FULL STACK DEVELOPER' />
        </div>
        <WaveTop />
      </header>
    </>
  );
};
