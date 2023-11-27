import { useEffect, useState } from "react";

const useCurrencyConverter = (inputCurrency, outputCurrency, currencies) => {
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    setResult();
  }, [inputCurrency, outputCurrency]);

  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
    setResult(
      (amount / currencies.data[inputCurrency].value) *
        currencies.data[outputCurrency].value
    );
  };

  return { amount, result, calculateResult, onAmountChange };
};

export { useCurrencyConverter };
