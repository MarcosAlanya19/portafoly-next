import { config } from '@/config';
import Image from 'next/image';
import { FC } from 'react';
import { Section, Text } from '../atom';

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
  id: string
}

export const AboutMeHomePage: FC<Props> = ({...props}) => {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          className='fill-current text-amber-300 pb-4 dark:text-slate-700'
          d='M0,128L0,128L288,128L288,160L576,160L576,128L864,128L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
        ></path>
      </svg>
      <Section id={props.id} className='bg-amber-300 dark:!bg-slate-700' title='Sobre mi'>
        <div className='grid lg:grid-cols-2 items-center gap-14'>
          <div className='flex flex-col gap-4'>
            <Text
              classname='text-justify'
              text={`Como estudiante de tercer ciclo en la carrera de Ingeniero de Sistemas, tengo una gran pasión por aprender y estoy constantemente buscando nuevas formas de mejorar mis habilidades técnicas. Como autodidacta, estoy siempre investigando y estudiando nuevas tecnologías, lenguajes y frameworks.`}
            />
            <Text
              classname='text-justify hidden lg:block'
              text='Estoy emocionado/a por enfrentar nuevos desafíos y aprender de mis experiencias. Creo en la importancia de la colaboración en equipo y en la comunicación clara para lograr objetivos comunes. Con mi actitud de aprendizaje continuo y mi capacidad para resolver problemas de manera efectiva, estoy seguro de que podré hacer una valiosa contribución en cualquier entorno de desarrollo.'
            />
            <div className='divide-y-2 divide-yellow-500 dark:divide-slate-500  my-8'>
              {textData.map((data, index) => (
                <Text key={index} classname='py-3' text={data.text} />
              ))}
            </div>
          </div>
          <Image
            src={config.IMG.ABOUT_ME}
            className='w-full hidden lg:block'
            alt='img-about-me'
            width={700}
            height={700}
          />
        </div>
      </Section>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          className='fill-current text-amber-300 pt-4 dark:text-slate-700'
          d='M0,128L0,288L288,288L288,96L576,96L576,256L864,256L864,320L1152,320L1152,192L1440,192L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z'
        ></path>
      </svg>
    </>
  );
};
