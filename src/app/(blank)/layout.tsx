'use client';

import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    return () => document.body.classList.remove('overflow-y-hidden');
  }, []);

  return <section className='custom'>{children}</section>;
}
