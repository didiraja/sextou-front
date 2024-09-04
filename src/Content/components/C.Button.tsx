import Link from 'next/link';

import Button from '@/components/atoms/Button';
import { ContentProps } from '@/Content/types';
import { TEXT } from '@/services/enums';

function BtnTxtReducer({ free, link }: Partial<ContentProps>) {
  if (free && link) {
    return TEXT.FREE_TICKETS;
  }

  if (free) {
    return TEXT.FREE_NO_TICKETS;
  }

  if (!free && link) {
    return TEXT.BUY_TICKETS;
  }

  return TEXT.NO_TICKETS;
}

function ButtonContent(props: ContentProps) {
  const { link, free } = props;

  const content = (
    <Button disabled={!link} {...props}>
      {BtnTxtReducer({ free, link })}
    </Button>
  );

  if (!link) {
    return content;
  }

  return (
    <Link className='u-url' target='_blank' href={link}>
      {content}
    </Link>
  );
}

export default ButtonContent;
