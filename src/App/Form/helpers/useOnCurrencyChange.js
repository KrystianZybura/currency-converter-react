import { useState } from "react";

const useOnCurrencyChange = (currencies) => {
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const onCurrencyChange = ({ target }, type) => {
    const newCurrency = currencies.find((name) => name === target.value);

    type === "input"
      ? setInputCurrency(newCurrency)
      : setOutputCurrency(newCurrency);
  };

  return {
    inputCurrency,
    outputCurrency,
    onCurrencyChange,
  };
};

export { useOnCurrencyChange };
