import { useThemeStore } from '@/store/useStore';
import { FC } from 'react';
import { Icon } from './Icon';

export const ToggleDark: FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <>
      {isDarkMode ? (
        <Icon className='cursor-pointer rounded-full border border-sky-500/5 bg-sky-500/5 p-3 text-sky-500 transition-colors hover:border-sky-500/10 hover:bg-sky-500/10 hover:!opacity-100 group-hover:opacity-70' onClick={toggleDarkMode} type='sun' />
      ) : (
        <Icon className='cursor-pointer rounded-full border border-amber-500/5 bg-amber-500/5 p-3 text-amber-500 transition-colors hover:border-amber-500/10 hover:bg-amber-500/10 hover:!opacity-100 group-hover:opacity-70' onClick={toggleDarkMode} type='moon' />
      )}
    </>
  );
};
