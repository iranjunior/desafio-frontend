export default (original, copy) => {
  if (typeof original === 'object' && typeof copy === 'object') return !Object.values(copy).every((value) => Object.values(original).includes(value));
  return new Error({ message: 'Type invalid' });
};
