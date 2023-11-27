const sortCurrencyKeys = (currencies) =>
  currencies.sort((a, b) => a.localeCompare(b));

const getCurrencyKeys = (currencies) => {
  if (!currencies) {
    return;
  }

  const currencyKeys = Object.keys(currencies.data);

  return sortCurrencyKeys(currencyKeys);
};

export { getCurrencyKeys };
