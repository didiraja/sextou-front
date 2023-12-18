import Image from 'next/image';
import Link from 'next/link';

import './TopBlock.css';

function TopBlock() {
  return (
    <section id='top' className='grid grid-cols-1'>
      <Link href='/'>
        <Image
          className='sextou-logo'
          src='/sextou.png'
          alt='Sextou! - Logo'
          width={669}
          height={253}
        />
      </Link>
    </section>
  );
}

export default TopBlock;
