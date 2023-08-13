import classNames from 'classnames';
import { ButtonProps } from './Button';
import './Title.pcss';

type TitleProps = ButtonProps & {
  className?: string
}

function Title({ className, children, highlight }: TitleProps) {
  return (
    <h1 className={classNames([{
      title: true,
      'section-title': true,
      highlight,
    }, className])}
    >
      {children}
    </h1>
  );
}

Title.defaultProps = {
  className: '',
};

export default Title;
