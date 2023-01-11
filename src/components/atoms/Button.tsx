import { ChildrenOnly } from "../../types";
import "./Button.pcss";

export type ButtonProps = ChildrenOnly & {
  highlight?: boolean;
  className?: string;
};

const Button = ({ className, children, highlight }: ButtonProps) => {
  return (
    <div
      className={`button-default ${className} ${highlight ? "highlight" : ""}`}
    >
      <button>{children}</button>
    </div>
  );
};

export default Button;
