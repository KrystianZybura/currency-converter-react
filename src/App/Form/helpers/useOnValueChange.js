import { useState } from "react";

const useOnValueChange = (inputCurrency, outputCurrency, rates) => {
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();

  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
    setResult((amount / rates[inputCurrency]) * rates[outputCurrency]);
  };
  return { amount, result, calculateResult, onAmountChange };
};

export { useOnValueChange };
