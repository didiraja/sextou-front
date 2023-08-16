export const textHasImgTag = (str: string) => {
  const regex = /<img[^>]*>/i;

  return regex.test(str);
};

export const removeNumberAfterLastSlash = (inputString: string) => {
  const lastSlashIndex = inputString.lastIndexOf('/');
  if (lastSlashIndex !== -1) {
    return inputString.substring(0, lastSlashIndex + 1);
  }
  return inputString;
};
