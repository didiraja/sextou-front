import { ChildrenOnly } from "../../types";
import "./Button.pcss";

export type ButtonProps = ChildrenOnly & {
  highlight?: boolean;
  className?: string;
  onClick?: () => void | undefined;
};

const Button = ({
  highlight,
  className = "",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={`button ${className} ${highlight ? "highlight" : ""}`}
      onClick={() => onClick?.()}
    >
      <button>{children}</button>
    </div>
  );
};

export default Button;
