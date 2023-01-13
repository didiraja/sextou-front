import { ButtonProps } from "./Button";
import "./Title.pcss";

const Title = ({ children, highlight }: ButtonProps) => {
  return (
    <h1 className={`section-title ${highlight ? "highlight" : ""}`}>
      {children}
    </h1>
  );
};

export default Title;
