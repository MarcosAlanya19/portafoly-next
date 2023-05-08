import { FC } from 'react';

interface Props {
  level: 'h1' | 'h2' | 'h3';
  text: string;
  classname?: string;
}

export const Title: FC<Props> = ({ level, text, classname }) => {
  return (
    <>
      {level === 'h1' && <h1 className={`text-6xl md:text-7xl font-semibold ${classname}`}>{text}</h1>}
      {level === 'h2' && <h2 className={`text-4xl font-semibold ${classname}`}>{text}</h2>}
      {level === 'h3' && <h3 className={`text-xl font-semibold ${classname}`}>{text}</h3>}
    </>
  );
};
