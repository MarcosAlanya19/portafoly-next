import { FC } from 'react';
import { Button, Section } from '../atom';

export const ContactHomePage: FC = () => {
  return (
    <Section title='Contacto'>
      <div className='grid md:grid-cols-2 mx-auto p-6'>
        <div>
          <iframe
            className='w-full h-full'
            src='https://embed.lottiefiles.com/animation/85332'
          ></iframe>
        </div>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='block font-medium mb-1'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full px-3 py-2 border border-gray-300 rounded'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block font-medium mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block font-medium mb-1'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='w-full px-3 py-2 border border-gray-300 rounded'
            ></textarea>
          </div>
          <Button
            text='Enviar'
          />
        </form>
      </div>
    </Section>
  );
};
