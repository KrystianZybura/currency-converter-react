const sortCurrencies = (currencies) =>
  currencies.sort((a, b) => a.localeCompare(b));

const getSortedCurrencyKeys = (currencies) => {
  const currencyKeys = Object.keys(currencies);

  const sortedCurrencyKeys = sortCurrencies(currencyKeys);

  return sortedCurrencyKeys;
};

export { getSortedCurrencyKeys };
