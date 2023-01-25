import { ChildrenOnly } from "../../types";
import "./Button.pcss";

export type ButtonProps = ChildrenOnly & {
  highlight?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | undefined;
};

const Button = ({
  highlight,
  className = "",
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <div
      data-testid="button-component"
      className={`button ${className} ${highlight ? "highlight" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={() => onClick?.()}
    >
      <button>{children}</button>
    </div>
  );
};

export default Button;
