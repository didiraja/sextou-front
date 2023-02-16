import { ChildrenOnly } from '../../types';
import './Button.pcss';

export type ButtonProps = ChildrenOnly & {
  pill?: boolean;
  highlight?: boolean;
  disabled?: boolean;
};

export type LinkProps = ButtonProps & {
  href?: string;
  target?: string;
  free?: boolean;
  tickets: string | undefined;
  className?: string;
  onClick?: (evt: any) => void | undefined;
};

// eslint-disable-next-line no-lone-blocks
{
  /**
   *
   * @example
   * <Button href='' pill={false} highlight={false} className={``} disabled={false} onClick={() =>}>
      {children}
     </Button>
   *
  */
}

function Link({
  pill,
  href,
  target,
  onClick,
  className,
  highlight,
  disabled,
  free,
  children,
  tickets,
}: LinkProps): JSX.Element {
  return (
    <a
      href={href}
      target={target}
      className={`link ${className} ${free ? 'free' : ''} ${tickets ? '' : 'no-tickets'}`}
      onClick={(evt) => onClick?.(evt)}
    >
      {/* eslint-disable-next-line no-use-before-define */}
      <Button pill={pill} highlight={highlight} disabled={disabled}>
        {children}
      </Button>
    </a>
  );
}

function Button({
  pill, highlight, children, disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      data-testid="button-component"
      className={`${pill ? 'pill' : 'button'} ${highlight ? 'highlight' : ''} ${
        disabled ? 'disabled' : ''
      }`}
    >
      {children}
    </button>
  );
}

const commonProps = {
  pill: false,
  highlight: false,
  disabled: false,
};

Button.defaultProps = {
  ...commonProps,
};

Link.defaultProps = {
  ...commonProps,
  free: false,
  href: '',
  target: '_blank',
  className: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default Link;
