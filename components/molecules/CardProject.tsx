import { config } from '@/config';
import Image from 'next/image';
import { FC } from 'react';
import { Button, Icon, Text, Title } from '../atom';

export const CardProject: FC = () => {
  return (
    <div className='flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
      <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
        <Image
          src={config.IMG.PROJECT.GUITAR}
          alt='img-project'
          className='w-full'
          width={500}
          height={400}
        />
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
        <button
          className='!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
          data-ripple-dark='true'
        >
          <Icon type='github' />
        </button>
      </div>
      <div className='p-6'>
        <div className='mb-3 flex items-center justify-between'>
          <Title level='h3' text='Proyecto - GuitarLA' />
        </div>
        <Text text='Proyecto realizado con Next, respecto a una tienda de guitarras, con un carrito de compras' />
        <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
          <Icon type='linkedin' />
        </div>
      </div>
      <div className='flex justify-between gap-2 p-6'>
        <Button text='Ver demo' className='w-full' />
        <Button text='Ver codigo' className='w-full' />
      </div>
    </div>
  );
};
