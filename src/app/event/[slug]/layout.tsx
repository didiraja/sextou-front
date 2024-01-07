'use client';

import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');
  }, []);

  return children;
}
