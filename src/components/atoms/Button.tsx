import { ChildrenOnly } from "../../types";
import "./Button.pcss";

export type ButtonProps = ChildrenOnly & {
  highlight?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | undefined;
};

export type LinkProps = ChildrenOnly & {
  href: string;
  target?: string;
  highlight?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (evt: any) => void | undefined;
};

{
  /*
  <Button
    highlight={false}
    className={``}
    disabled={false}
    onClick={() =>}
  >
    {children}
  </Button>  
*/
}

const Button = ({
  highlight,
  className = "",
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      data-testid="button-component"
      className={`button ${highlight ? "highlight" : ""} ${
        disabled ? "disabled" : ""
      }`}
      // ${className}
      onClick={() => onClick?.()}
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
  children,
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className={`link ${className}`}
      onClick={(evt) => onClick?.(evt)}
    >
      <Button highlight={highlight} disabled={disabled}>
        {children}
      </Button>
    </a>
  );
};

export default Link;
