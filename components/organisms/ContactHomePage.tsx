import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Button, Section } from '../atom';

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
                className='w-full px-3 py-2 border border-gray-300 rounded'
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
                className='w-full px-3 py-2 border border-gray-300 rounded'
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
                className='w-full px-3 py-2 border border-gray-300 rounded resize-none'
              />
              <ErrorMessage
                name='message'
                component='div'
                className='text-red-500'
              />
            </div>
            <Button text='Enviar' type='submit' />
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </Section>
  );
};
