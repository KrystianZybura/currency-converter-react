import { useState } from "react";

const useOnCurrencyChange = (currencies) => {
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const onInputCurrencyChange = ({ target }) => {
    const newInputCurrency = currencies.find((name) => name === target.value);

    setInputCurrency(newInputCurrency);
  };

  const onOutputCurrencyChange = ({ target }) => {
    const newOutputCurrency = currencies.find((name) => name === target.value);

    setOutputCurrency(newOutputCurrency);
  };

  return {
    inputCurrency,
    outputCurrency,
    onInputCurrencyChange,
    onOutputCurrencyChange,
  };
};

export { useOnCurrencyChange };
