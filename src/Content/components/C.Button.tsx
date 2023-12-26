import Link from 'next/link';

import Button from '@/components/atoms/Button';
import { ContentProps } from '@/Content/types';
import { TEXT } from '@/services/enums';

function BtnTxtReducer({ free, tickets }: Partial<ContentProps>) {
  if (free && tickets) {
    return TEXT.FREE_TICKETS;
  }

  if (free) {
    return TEXT.FREE_NO_TICKETS;
  }

  if (!free && tickets) {
    return TEXT.BUY_TICKETS;
  }

  return TEXT.NO_TICKETS;
}

function ButtonContent(props: ContentProps) {
  const { tickets, free } = props;

  const content = (
    <Button disabled={!tickets} {...props}>
      {BtnTxtReducer({ free, tickets })}
    </Button>
  );

  if (!tickets) {
    return content;
  }

  return (
    <Link target='_blank' href={tickets}>
      {content}
    </Link>
  );
}

export default ButtonContent;
