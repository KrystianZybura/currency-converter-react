import axios from "axios";
import { useState, useEffect } from "react";

const fetchCurrenciesData = async () => {
  const response = await axios.get(
    "https://api.exchangerate.host/latest?base=PLN"
  );
  const currenciesData = await response.data;
  return currenciesData;
};

const useFetchedData = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchCurrenciesData();
        const keys = Object.keys(fetchedData.rates);

        setRates(fetchedData.rates);
        setCurrencies(keys);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { currencies, rates };
};

export { useFetchedData };
