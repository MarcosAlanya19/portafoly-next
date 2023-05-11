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
        className={`${props.className} bg-no-repeat bg-cover bg-center
        bg-[url(https://res.cloudinary.com/dltl0daa4/image/upload/v1683769795/portafolio/header-light_y3nd9b.jpg)]
        dark:bg-[url(https://res.cloudinary.com/dltl0daa4/image/upload/v1683769794/portafolio/header-dark_vkinkk.jpg)]
        dark:text-white`}
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
