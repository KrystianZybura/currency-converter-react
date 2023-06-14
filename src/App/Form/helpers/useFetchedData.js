import axios from "axios";
import { useState, useEffect } from "react";

const fetchCurrencies = async () => {
  const response = await axios.get(
    "https://api.exchangerate.host/latest?base=PLN"
  );
  const currencies = await response.data;
  return currencies;
};

const useFetchedData = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchCurrencies();
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
