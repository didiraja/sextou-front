import { ChildrenOnly } from "../../types";
import "./Button.pcss";

export type ButtonProps = ChildrenOnly & {
  pill?: boolean;
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

const Button = ({ pill, highlight, children, disabled }: ButtonProps) => {
  return (
    <button
      data-testid="button-component"
      className={`${pill ? "pill" : "button"} ${highlight ? "highlight" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      {children}
    </button>
  );
};

const Link = ({
  pill = false,
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
      <Button pill={pill} highlight={highlight} disabled={disabled} free={free}>
        {children}
      </Button>
    </a>
  );
};

export default Link;
