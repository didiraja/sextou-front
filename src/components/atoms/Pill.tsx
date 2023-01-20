import { ReactNode } from "react";
import "./Pill.pcss";

export type PillProps = {
  highlight?: boolean;
  className?: string;
  bg?: string;
  color?: string;
  onClick?: () => void;
  children: ReactNode;
};

const Pill = (props: PillProps) => {
  const { children, highlight, bg, color } = props;
  const handleClick = () => props.onClick && props.onClick();

  return (
    <button
      className={`button-pill ${highlight && "highlight"} ${bg && "bg"} ${
        color ? color : ""
      }`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export default Pill;
