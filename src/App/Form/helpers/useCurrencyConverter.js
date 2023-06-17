import { useState, useEffect } from "react";

const useCurrencyConverter = (inputCurrency, outputCurrency, currencies) => {
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    setResult();
  }, [inputCurrency, outputCurrency]);

  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
    setResult(
      (amount / currencies[inputCurrency]) * currencies[outputCurrency]
    );
  };

  return { amount, result, calculateResult, onAmountChange };
};

export { useCurrencyConverter };
