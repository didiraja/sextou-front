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
  className?: string;
  onClick?: (evt: any) => void | undefined;
};

// eslint-disable-next-line no-lone-blocks
{
  /*
  <Button
    href=''
    pill={false}
    highlight={false}
    className={``}
    disabled={false}
    onClick={() =>}
  >
    {children}
  </Button>
*/
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
}: LinkProps): JSX.Element {
  return (
    <a
      href={href}
      target={target}
      className={`link ${className} ${free ? 'free' : ''}`}
      onClick={(evt) => onClick?.(evt)}
    >
      <Button pill={pill} highlight={highlight} disabled={disabled}>
        {children}
      </Button>
    </a>
  );
}

Button.defaultProps = {
  pill: false,
  highlight: false,
  disabled: false,
};

Link.defaultProps = {
  pill: false,
  highlight: false,
  disabled: false,
  free: false,
  href: false,
  target: '_blank',
  className: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default Link;
