import { AppProps } from "../../types";

export type ButtonProps = AppProps & {
  highlight?: boolean;
};

const Button = ({ children, highlight }: ButtonProps) => {
  return (
    <div className={`button-default ${highlight ? "highlight" : ""}`}>
      <button className="flex justify-center items-center {bg} {color} {style}">
        {children}
      </button>
    </div>
  );
};

export default Button;
