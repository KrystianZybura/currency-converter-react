import axios from "axios";
import { useState, useEffect } from "react";

const useFetchedCurrenciesData = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        const currenciesData = await response.data.rates;
        const currencyKeys = Object.keys(currenciesData);

        setRates(currenciesData);
        setCurrencies(currencyKeys);
      } catch (error) {
        console.error(error);

        setIsError(true);
      }
    };

    fetchCurrenciesData();
  }, []);

  return { currencies, rates, isError };
};

export { useFetchedCurrenciesData };