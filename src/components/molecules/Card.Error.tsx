import { ReactNode } from 'react';

function CardError({ className = '', children }: {
  className?: string, children: ReactNode
}): JSX.Element {
  return (
    <div className={`bg-slate-800 rounded-lg w-full x-auto p-5 text-white font-bold ${className}`}>
      {/* <Icon class="mr-2 text-2xl" icon="material-symbols:error-rounded" /> */}
      {children}
    </div>
  );
}

export default CardError;
