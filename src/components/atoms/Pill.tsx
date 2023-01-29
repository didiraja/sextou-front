import { ReactNode } from "react";
import "./Pill.pcss";

export type PillProps = {
  highlight?: boolean;
  className?: string;
  bg?: string;
  color?: string;
  onClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
};

export const pillClassName = "button-pill";

const Pill = (props: PillProps) => {
  const { children, highlight, bg, color } = props;
  const handleClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    props.onClick?.(evt);

  return (
    <button
      className={`${pillClassName} ${highlight && "highlight"} ${bg && "bg"} ${
        color ? color : ""
      }`}
      onClick={(evt) => handleClick(evt)}
    >
      {children}
    </button>
  );
};

export default Pill;
