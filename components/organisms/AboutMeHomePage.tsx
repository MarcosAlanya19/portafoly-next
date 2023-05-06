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
  { text: 'Estudiante: Ingenieria en sistamas - ELP PONTIFICIA' },
];

export const AboutMeHomePage: FC = () => {
  return (
    <Section className='bg-yellow-300' title='Sobre mi'>
      <div className='grid md:grid-cols-2 items-center gap-14'>
        <div className='flex flex-col gap-4'>
          <Text
            classname='text-justify'
            text={`Como estudiante de tercer ciclo en la carrera de Ingeniero de Sistemas, tengo una gran pasión por aprender y estoy constantemente buscando nuevas formas de mejorar mis habilidades técnicas. Como autodidacta, estoy siempre investigando y estudiando nuevas tecnologías, lenguajes y frameworks.`}
          />
          <Text
            classname='text-justify hidden md:block'
            text='Estoy emocionado/a por enfrentar nuevos desafíos y aprender de mis experiencias. Creo en la importancia de la colaboración en equipo y en la comunicación clara para lograr objetivos comunes. Con mi actitud de aprendizaje continuo y mi capacidad para resolver problemas de manera efectiva, estoy seguro de que podré hacer una valiosa contribución en cualquier entorno de desarrollo.'
          />
          <div className='divide-y-2 my-8'>
            {textData.map((data, index) => (
              <Text key={index} classname='py-3' text={data.text} />
            ))}
          </div>
        </div>
        <Image
          src={config.IMG.ABOUT_ME}
          className='w-full hidden md:block'
          alt='img-about-me'
          width={700}
          height={700}
        />
      </div>
    </Section>
  );
};
