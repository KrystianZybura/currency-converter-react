const sortCurrencyKeys = (currencies) =>
  currencies.sort((a, b) => a.localeCompare(b));

const getCurrencyKeys = (currencies) => {
  const currencyKeys = Object.keys(currencies);

  const sortedCurrencyKeys = sortCurrencyKeys(currencyKeys);

  return sortedCurrencyKeys;
};

export { getCurrencyKeys };
