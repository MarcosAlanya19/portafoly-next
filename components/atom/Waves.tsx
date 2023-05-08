import { FC } from 'react';

export const WaveTop: FC = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        className='fill-current text-amber-300 pb-4 dark:text-slate-700'
        d='M0,128L0,128L288,128L288,160L576,160L576,128L864,128L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
      ></path>
    </svg>
  );
};

export const WaveBottom: FC = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        className='fill-current text-amber-300 dark:text-slate-700'
        d='M0,128L0,288L288,288L288,96L576,96L576,256L864,256L864,320L1152,320L1152,192L1440,192L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z'
      ></path>
    </svg>
  );
};
