import axios from "axios";
import { useState, useEffect } from "react";

const CURRENCIES_API_URL = "https://api.exchangerate.host/latest?source=ecb";

const sortCurrencies = (currencies) =>
  currencies.sort((a, b) => a.localeCompare(b));

const useFetchedCurrenciesData = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await axios.get(CURRENCIES_API_URL);

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

  return { currencies, rates, isLoading, isError };
};

export { useFetchedCurrenciesData };
