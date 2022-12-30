import { ButtonProps } from "./Button";

type PillProps = ButtonProps & {
  bg?: string;
  color?: string;
};

const Pill = ({ children, highlight, bg, color }: PillProps) => {
  return (
    <button
      className={`button-pill ${highlight ? "highlight" : ""} ${
        bg ? "bg" : ""
      } ${color ? "color" : ""}`}
    >
      {children}
    </button>
  );
};

export default Pill;
