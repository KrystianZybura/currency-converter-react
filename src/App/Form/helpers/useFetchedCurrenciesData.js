import axios from "axios";
import { useState, useEffect } from "react";

const CURRENCIES_API_URL = "https://api.exchangerate.host/latest?source=ecb";

const useFetchedCurrenciesData = () => {
  const [currencies, setCurrencies] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await axios.get(CURRENCIES_API_URL);
        response && setStatus("success");

        const currenciesData = await response.data.rates;

        setCurrencies(currenciesData);
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

    setTimeout(fetchCurrenciesData, 1000);
  }, []);

  return { currencies, status };
};

export { useFetchedCurrenciesData };
