'use client'; // Error components must be Client Components

import * as React from 'react';

import Button from '@/components/atoms/Button';
import Title from '@/components/atoms/Title';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <section>
        <Title className='!border-l-0 text-center !font-normal'>
          Erro no carregamento da página!
        </Title>

        <div className='font- mx-auto max-w-screen-md'>
          <Button className='w-24 !bg-[var(--pink-900)]' onClick={reset}>
            Tente novamente
          </Button>
        </div>
      </section>
    </main>
  );
}
