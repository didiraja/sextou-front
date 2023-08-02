/* eslint-disable import/prefer-default-export */

export const textHasImgTag = (str: string) => {
  const regex = /<img[^>]*>/i;

  return regex.test(str);
};
