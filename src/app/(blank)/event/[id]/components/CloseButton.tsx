'use client';
import { useRouter } from 'next/navigation';

const CloseButton = () => {
  const router = useRouter();

  return (
    <img
      src='/icon/close.svg'
      alt='Fechar Modal'
      onClick={() => router.back()}
    />
  );
};

export default CloseButton;
