import classNames from 'classnames';
import { ButtonProps } from './Button';
import './Title.pcss';

type TitleProps = ButtonProps & {
  className?: string;
};

function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={classNames([
        {
          title: true,
          'section-title': true,
        },
        className,
      ])}
    >
      {children}
    </h1>
  );
}

Title.defaultProps = {
  className: '',
};

export default Title;
