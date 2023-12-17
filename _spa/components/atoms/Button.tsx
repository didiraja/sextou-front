import classNames from 'classnames';
import { ChildrenOnly } from '../../types';
import './Button.pcss';

export type ButtonProps = ChildrenOnly & {
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
      className={classNames([
        {
          button: !pill,
          pill,
          free,
        },
        className,
      ])}
    >
      {children}
    </button>
  );
}

export default Button;
