import axios from "axios";
import { useState, useEffect } from "react";

const sortCurrencies = (currencies) =>
  currencies.sort((a, b) => a.localeCompare(b));

const useFetchedCurrenciesData = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?source=ecb"
        );

        const currenciesData = await response.data.rates;
        const currencyKeys = Object.keys(currenciesData);

        setRates(currenciesData);
        setCurrencies(sortCurrencies(currencyKeys));
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
