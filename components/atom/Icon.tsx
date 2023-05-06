import { FC } from 'react';
import * as si from 'react-icons/Si';
import * as ai from 'react-icons/Ai';

const ICONS_MAP = {
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
  mysql: si.SiMysql,
  next: si.SiNextdotjs,
  open: ai.AiOutlineMenu,
  postgresql: si.SiPostgresql,
  react: si.SiReact,
  tailwind: si.SiTailwindcss,
  typescript: si.SiTypescript,
};

interface Props {
  classname?: string;
  type: keyof typeof ICONS_MAP;
  onClick?: (e:any) => void;
}

export const Icon: FC<Props> = ({ ...props }) => {
  const IconComponent = ICONS_MAP[props.type];
  if (!IconComponent) {
    return null;
  }
  return (
    <div
      className={`${props.classname} cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70`}
    >
      <IconComponent onClick={props.onClick} />
    </div>
  );
};
