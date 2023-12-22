import clsx from 'clsx';

import styles from './Title.module.scss';

import { ButtonProps } from './Button';

type TitleProps = ButtonProps & {
  className?: string;
};

function Title({ className, children }: TitleProps) {
  return (
    <h1 className={clsx({ title: true }, styles.section_title, className)}>
      {children}
    </h1>
  );
}

export default Title;
