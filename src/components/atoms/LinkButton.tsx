import Button from "./Button";
import { ChildrenOnly } from "../../types";
// import "./LinkButton.pcss";

export type LinkButtonProps = ChildrenOnly & {
  href: string;
  target?: string;
  highlight?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (evt: any) => void | undefined;
};

const LinkButton = ({
  href,
  target = "_blank",
  onClick,
  className,
  highlight,
  disabled,
  children,
}: LinkButtonProps) => {
  return (
    <a href={href} target={target} onClick={(evt) => onClick?.(evt)}>
      <Button className={className} highlight={highlight} disabled={disabled}>
        {children}
      </Button>
    </a>
  );
};

export default LinkButton;
