import { ButtonProps } from "./Button";
import "./Pill.pcss";

type PillProps = ButtonProps & {
  bg?: string;
  color?: string;
  onClick?: void;
};

const Pill = (props: PillProps) => {
  const { children, highlight, bg, color } = props;

  return (
    <button
      className={`button-pill ${highlight ? "highlight" : ""} ${bg ? bg : ""} ${
        color ? color : ""
      }`}
      onClick={() => props.onClick()}
    >
      {children}
    </button>
  );
};

export default Pill;
