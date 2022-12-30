import { AppProps } from "../../types";
import "./Button.pcss";

export type ButtonProps = AppProps & {
  highlight?: boolean;
};

const Button = ({ children, highlight }: ButtonProps) => {
  return (
    <div className={`button-default ${highlight ? "highlight" : ""}`}>
      <button>{children}</button>
    </div>
  );
};

export default Button;
