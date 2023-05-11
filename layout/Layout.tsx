import { VerticalText } from '@/components/atom';
import { Footer, Navbar } from '@/components/organisms';
import { JSXElement } from '@/interface/all.interface';
import { useThemeStore } from '@/store/useStore';
import { FC } from 'react';

interface Props {
  children: JSXElement;
  className?: string;
}

export const Layout: FC<Props> = ({ ...props }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <>
      <main className={`${isDarkMode ? 'dark' : ''}`}>
        <VerticalText
          text='marcosalanya19@gmail.com'
          type='vertical-text'
          direction='left-0'
        />
        <VerticalText
          text='Marcos Alanya Pacheco'
          type='vertical-text2'
          direction='right-0'
        />
        <Navbar />
        <div className=''>
          <div className='dark:bg-slate-800'></div>
          <div className={`${props.className} dark:bg-slate-800 dark:text-white`}>
            {props.children}
          </div>
          <div className='dark:bg-slate-800'></div>
        </div>
        <Footer />
      </main>
    </>
  );
};
