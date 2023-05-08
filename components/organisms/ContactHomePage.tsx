import { FC, useState } from 'react';
import { Button, Section } from '../atom';

interface Props {
  id: string;
}

export const ContactHomePage: FC<Props> = ({ ...props }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Section id={props.id} title='Contacto'>
      <div className='grid md:grid-cols-2 gap-9 mx-auto p-6'>
        <div className='relative w-full h-full'>
          <video
            className='absolute top-0 left-0 w-full h-full object-cover'
            src='https://v4.cdnpk.net/videvo_files/video/free/video0469/large_watermarked/_import_616e5d05843726.58854694_FPpreview.mp4'
            autoPlay
            loop
            muted
          ></video>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <Button text='Enviar' type='submit' />
        </form>
      </div>
    </Section>
  );
};
