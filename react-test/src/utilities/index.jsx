export const createDeck = symbols =>
  symbols.map(symbol => ({ symbol, flipped: false, matched: false }));
export const shuffle = (arr, inPlace = true) => {
  // shallow copy if not inPlace, modifying the input array otherwise
  const base = inPlace ? arr : [].concat(arr);
  for (let i = arr.length, j; i; ) {
    j = Math.floor(Math.random() * i);
    [base[i], base[j]] = [base[j], base[--i]];
  }
  return base;
};
