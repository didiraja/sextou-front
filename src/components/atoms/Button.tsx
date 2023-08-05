import { Link as LinkRouter } from 'react-router-dom';
import { ChildrenOnly } from '../../types';
import './Button.pcss';

export type ButtonProps = ChildrenOnly & {
  pill?: boolean;
  highlight?: boolean;
  disabled?: boolean;
};

export type LinkProps = ButtonProps & {
  href: string;
  target?: string;
  free?: boolean;
  tickets?: string | undefined;
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
  className,
  highlight,
  disabled,
  free,
  children,
  tickets,
}: LinkProps): JSX.Element {
  return (
    <LinkRouter
      to={href}
      target={target}
      className={`link ${className} ${free ? 'free' : ''} ${!tickets ? 'no-tickets' : ''}`}
      onClick={(evt) => (!pill && !tickets) && evt.preventDefault()}
    >
      {/* eslint-disable-next-line no-use-before-define */}
      <Button pill={pill} highlight={highlight} disabled={disabled}>
        {children}
      </Button>
    </LinkRouter>
  );
}

function Button({
  pill, highlight, children, disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      data-testid="button-component"
      className={`${pill ? 'pill' : 'button'} ${highlight ? 'highlight' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {children}
    </button>
  );
}

export default Link;
