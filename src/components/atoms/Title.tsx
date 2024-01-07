import clsx from 'clsx';

import { ButtonProps } from './Button';

import styles from './Title.module.scss';

type TitleProps = ButtonProps & {
  className?: string;
};

function Title({ className, children }: TitleProps) {
  return (
    <p className={clsx({ title: true }, styles.section_title, className)}>
      {children}
    </p>
  );
}

export default Title;
