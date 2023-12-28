import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  pill?: boolean;
  disabled?: boolean;
  free?: boolean;
};

function Button({ className, pill, children, disabled, free }: ButtonProps) {
  return (
    <button
      data-testid='button-component'
      disabled={disabled}
      className={clsx(
        pill ? styles.pill : styles.button,
        styles.free,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
