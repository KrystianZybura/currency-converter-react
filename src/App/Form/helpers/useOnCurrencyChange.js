import { useState } from "react";

const useOnCurrencyChange = (currencies) => {
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const onCurrencyChange = ({ target }, input) => {
    const newCurrency = currencies.find((name) => name === target.value);

    input ? setInputCurrency(newCurrency) : setOutputCurrency(newCurrency);
  };

  return {
    inputCurrency,
    outputCurrency,
    onCurrencyChange,
  };
};

export { useOnCurrencyChange };
