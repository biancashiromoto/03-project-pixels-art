export const createArray = (length, content) => {
  return Array.from({length: length}, () => content);
}