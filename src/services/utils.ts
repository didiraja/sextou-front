/**
 *
 * Check if String has an Img tag
 *
 */
export const textHasImgTag = (str: string) => {
  const regex = /<img[^>]*>/i;

  return regex.test(str);
};
