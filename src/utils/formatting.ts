export const toCapital = (text: string) => {
  return [text[0].toUpperCase(), text.substring(1, text.length)].join('');
};
