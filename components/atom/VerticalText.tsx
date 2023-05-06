import { FC } from 'react';

interface Props {
  type: 'vertical-text' | 'vertical-text2';
  direction: 'right-0' | 'left-0';
  text: string;
  className?: string;
}

export const VerticalText: FC<Props> = ({ ...props }) => {
  return (
    <div
      className={`${props.direction} ${props.className} ${
        props.type === 'vertical-text2' ? 'pr-9' : 'pl-9'
      } md:grid hidden items-center h-screen fixed dark:text-white`}
    >
      <div className={`${props.type}  text-xl`}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
