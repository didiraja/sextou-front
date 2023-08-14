import classNames from 'classnames';
import { ChildrenOnly } from '../../types';
import './Button.pcss';

export type ButtonProps = ChildrenOnly & {
  className?: string;
  pill?: boolean;
  highlight?: boolean;
  disabled?: boolean;
};

function Button({
  className, pill, highlight, children, disabled,
}: ButtonProps) {
  return (
    <button
      data-testid="button-component"
      className={classNames([{
        button: !pill,
        pill,
        disabled,
        highlight,
      }, className])}
    >
      {children}
    </button>
  );
}

export default Button;
