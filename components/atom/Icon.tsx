import { FC } from 'react';
import * as ai from 'react-icons/ai';
import * as fa from 'react-icons/fa';
import * as si from 'react-icons/si';

export const ICONS_MAP = {
  close: ai.AiOutlineClose,
  docker: si.SiDocker,
  empty_heart: ai.AiOutlineHeart,
  express: si.SiExpress,
  facebook: ai.AiFillFacebook,
  github: ai.AiFillGithub,
  heart: ai.AiFillHeart,
  instagram: ai.AiOutlineInstagram,
  linkedin: ai.AiFillLinkedin,
  mongodb: si.SiMongodb,
  moon: fa.FaMoon,
  mysql: si.SiMysql,
  next: si.SiNextdotjs,
  open: ai.AiOutlineMenu,
  postgresql: si.SiPostgresql,
  react: si.SiReact,
  sun: fa.FaSun,
  tailwind: si.SiTailwindcss,
  strapi: si.SiStrapi,
  typescript: si.SiTypescript,
};

interface Props {
  className?: string;
  theme?: string
  type: keyof typeof ICONS_MAP;
  onClick?: (e: any) => void;
}

export const Icon: FC<Props> = ({ ...props }) => {
  const IconComponent = ICONS_MAP[props.type];
  if (!IconComponent) {
    return null;
  }

  if (props.theme === 'default') {

  }

  return (
    <div onClick={props.onClick} className={`${props.className}`}>
      <IconComponent className='dark:text-white' />
    </div>
  );
};
