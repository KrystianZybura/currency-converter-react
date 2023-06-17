const sortCurrencyKeys = (currencies) =>
  currencies.sort((a, b) => a.localeCompare(b));

const getCurrencyKeys = (currencies) => {
  const currencyKeys = Object.keys(currencies);

  return sortCurrencyKeys(currencyKeys);
};

export { getCurrencyKeys };
