import { currencies } from "../Kantor";

const getCurrencyMark = (currency) =>
    currencies.map(({ name, mark }) => name === currency ? mark : "");

const updateCurrency = (currency, ...currencyValues) =>
    currencyValues.map(() => ({
        name: currency,
        mark: getCurrencyMark(currency),
    }));

export { updateCurrency };