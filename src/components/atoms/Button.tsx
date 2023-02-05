import { ChildrenOnly } from "../../types";
import "./Button.pcss";

export type ButtonProps = ChildrenOnly & {
  highlight?: boolean;
  disabled?: boolean;
  free?: boolean;
};

export type LinkProps = ButtonProps & {
  href?: string;
  target?: string;
  className?: string;
  onClick?: (evt: any) => void | undefined;
};

{
  /*
  <Button
    href=''
    highlight={false}
    className={``}
    disabled={false}
    onClick={() =>}
  >
    {children}
  </Button>  
*/
}

const Button = ({ highlight, children, disabled }: ButtonProps) => {
  return (
    <button
      data-testid="button-component"
      className={`button ${highlight ? "highlight" : ""} ${
        disabled ? "disabled" : ""
      }`}
      // ${className}
    >
      {children}
    </button>
  );
};

const Link = ({
  href,
  target = "_blank",
  onClick,
  className,
  highlight,
  disabled,
  free,
  children,
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className={`link ${className} ${free ? "free" : ""}`}
      onClick={(evt) => onClick?.(evt)}
    >
      <Button highlight={highlight} disabled={disabled} free={free}>
        {children}
      </Button>
    </a>
  );
};

export default Link;
