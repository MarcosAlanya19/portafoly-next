import { config } from '@/config';
import Image from 'next/image';
import { FC } from 'react';
import { Anchor, Section, Text, WaveBottom } from '../atom';
import { useThemeStore } from '@/store/useStore';

const textData = [
  { text: 'Nombre: Marcos Alanya Pacheco' },
  { text: 'Email: marcosalanya19@gmail.com' },
  { text: 'Celular: +51 934 737 663' },
  { text: 'Nacimiento: 12 febrero del 2001' },
  { text: 'Ubicación: Perú, Ayacucho' },
  { text: 'Egresado: Contabilidad financiera y tributaria - IFB CERTUS' },
  { text: 'Estudiante: Ingeniero de sistemas - ELP PONTIFICIA' },
];

interface Props {
  id: string;
}

export const AboutMeHomePage: FC<Props> = ({ ...props }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <>
      <Section
        id={props.id}
        className='bg-amber-300 dark:!bg-slate-700'
        title='Sobre mi'
      >
        <div className='lg:grid lg:grid-cols-2 items-center gap-14'>
          <article className='flex flex-col gap-4'>
            <div className='flex flex-col items-center'>
              <div className='mb-2'>
                <Text
                  classname='text-justify'
                  text={`Como estudiante de tercer ciclo en la carrera de Ingeniero de Sistemas, tengo una gran pasión por aprender y estoy constantemente buscando nuevas formas de mejorar mis habilidades técnicas. Como autodidacta, estoy siempre investigando y estudiando nuevas tecnologías, lenguajes y frameworks.`}
                />
                <Text
                  classname='text-justify hidden lg:block'
                  text='Estoy emocionado por enfrentar nuevos desafíos y aprender de mis experiencias. Creo en la importancia de la colaboración en equipo y en la comunicación clara para lograr objetivos comunes. Con mi actitud de aprendizaje continuo y mi capacidad para resolver problemas de manera efectiva, estoy seguro de que podré hacer una valiosa contribución en cualquier entorno de desarrollo.'
                />
              </div>

              {isDarkMode ? (
                <Image
                  alt='img-about-me'
                  className='w-full object-cover lg:block'
                  src={config.IMG.ABOUT_DARK}
                  height={1000}
                  width={700}
                />
                ) : (
                <Image
                  alt='img-about-me'
                  className='w-full object-cover lg:block'
                  src={config.IMG.ABOUT}
                  height={1000}
                  width={700}
                />
              )}
            </div>
            <Anchor href='/files/CV.pdf' variant='button' text='Curriculum Vitae' />
          </article>

          <article className='flex flex-col gap-4'>
            <div className='divide-y-2 divide-yellow-500 dark:divide-slate-500  my-8'>
              {textData.map((data, index) => (
                <Text key={index} classname='py-3' text={data.text} />
              ))}
            </div>
          </article>
        </div>
      </Section>
      <WaveBottom />
    </>
  );
};
