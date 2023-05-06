import { useThemeStore } from '@/store/useStore';
import { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const TogleDark: FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <button
      className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <FaSun className='text-gray-100' />
      ) : (
        <FaMoon className='text-gray-900' />
      )}
    </button>
  );
};
