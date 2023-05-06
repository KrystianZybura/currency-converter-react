const getCurrencyMark = (currency, ...currencies) => currencies.map(({ name, mark }) => name === currency ? mark : "");

export { getCurrencyMark };