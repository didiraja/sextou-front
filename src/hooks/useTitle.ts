import React from 'react';

const useTitle = (title: string) => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = React.useRef(documentDefined ? document.title : 'Sextou! beta');

  React.useEffect(() => {
    if (!documentDefined) return;

    if (document.title !== title) document.title = title;

    // eslint-disable-next-line consistent-return
    return () => {
      document.title = originalTitle.current;
    };
  }, []);
};

export default useTitle;
