import { ReactNode } from 'react';

function CardError({
  className = '',
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div
      className={`x-auto mb-5 w-full rounded-lg bg-slate-800 p-5 font-bold text-white ${className}`}
    >
      {/* <Icon class="mr-2 text-2xl" icon="material-symbols:error-rounded" /> */}
      {children}
    </div>
  );
}

export default CardError;
