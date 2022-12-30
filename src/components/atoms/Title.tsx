import { ButtonProps } from "./Button";

const Title = ({ children, highlight }: ButtonProps) => {
  return (
    <h1
      className={`section-title border-orange-600 ${
        highlight ? "highlight" : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
