const calculateResult = (amount, currencyPair, { eurToPlnRate, usdToEurRate, usdToPlnRate }) => {
    switch (currencyPair) {
        case "PLN/EUR":
            return amount / eurToPlnRate;

        case "PLN/USD":
            return amount / usdToPlnRate;

        case "USD/PLN":
            return amount * usdToPlnRate;

        case "USD/EUR":
            return amount * usdToEurRate;

        case "EUR/USD":
            return amount / usdToEurRate;

        case "EUR/PLN":
            return amount * eurToPlnRate;

        default:
            return NaN;
    };
};

export { calculateResult };