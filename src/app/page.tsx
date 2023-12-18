'use client';
import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main>
      <section className=''>
        <div className='layout py-12 text-center'>
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>
        </div>
      </section>
    </main>
  );
}
