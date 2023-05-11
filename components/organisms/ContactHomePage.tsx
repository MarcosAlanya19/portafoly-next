import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { Anchor, Button, Section } from '../atom';

interface Props {
  id: string;
}

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Campo obligatorio'),
  email: Yup.string().email('Email inválido').required('Campo obligatorio'),
  message: Yup.string().required('Campo obligatorio'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const ContactHomePage: FC<Props> = ({ ...props }) => {
  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log('Email enviado');
      await axios.post('/api/sendEmail', values);
      resetForm();
      toast.success('¡Email enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el email:', error);
    }
  };

  return (
    <Section id={props.id} title='Contacto'>
      <div className='md:grid md:grid-cols-2 gap-9 mx-auto px-6 pb-6'>
        <div className='relative w-full h-full'>
          <video
            className='absolute top-0 left-0 w-full h-full object-cover'
            src='https://v4.cdnpk.net/videvo_files/video/free/video0469/large_watermarked/_import_616e5d05843726.58854694_FPpreview.mp4'
            autoPlay
            loop
            muted
          ></video>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className='mb-4'>
              <label htmlFor='name' className='block font-medium mb-1'>
                Nombre
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                className='text-black w-full px-3 py-2 border border-gray-300 rounded'
              />
              <ErrorMessage name='name' component='div' className='text-red-500' />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block font-medium mb-1'>
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className='text-black w-full px-3 py-2 border border-gray-300 rounded'
              />
              <ErrorMessage name='email' component='div' className='text-red-500' />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block font-medium mb-1'>
                Mensaje
              </label>
              <Field
                as='textarea'
                id='message'
                name='message'
                rows={4}
                className='text-black w-full px-3 py-2 border border-gray-300 rounded resize-none'
              />
              <ErrorMessage
                name='message'
                component='div'
                className='text-red-500'
              />
            </div>
            <div className='flex gap-2 flex-col lg:flex-row lg:justify-between'>
              <Button text='Enviar' type='submit' />
              <Anchor
                href='https://wa.me/934737663?text=Un%20gusto,%20vengo%20desde%20tu%20portafolio.'
                className='bg-green-600 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500'
                text='Whatsapp: +51 934737663'
                variant='button'
              />
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </Section>
  );
};
