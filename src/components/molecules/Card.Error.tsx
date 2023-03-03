import { ChildrenOnly } from '../../types';

function CardError({ children }: ChildrenOnly): JSX.Element {
  return (
    <div className="bg-slate-800 rounded-lg w-full x-auto md:ml-6 lg:ml-16 p-5 text-white font-bold">
      {/* <Icon class="mr-2 text-2xl" icon="material-symbols:error-rounded" /> */}
      {children}
    </div>
  );
}

export default CardError;
