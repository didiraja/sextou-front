import { ButtonProps } from './Button';
import './Title.pcss';

type TitleProps = ButtonProps & {
  className?: string
}

function Title({ className, children, highlight }: TitleProps) {
  return (
    <h1 className={`title section-title ${className} ${highlight ? 'highlight' : ''}`}>
      {children}
    </h1>
  );
}

Title.defaultProps = {
  className: '',
};

export default Title;
