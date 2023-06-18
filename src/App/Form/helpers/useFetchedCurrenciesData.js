import axios from "axios";
import { useState, useEffect } from "react";

const CURRENCIES_API_URL = "https://api.exchangerate.host/latest?source=ecb";

const useFetchedCurrenciesData = () => {
  const [currenciesData, setCurrenciesData] = useState({
    status: "loading",
    currencies: {},
  });

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await axios.get(CURRENCIES_API_URL);

        const currencies = await response.data.rates;

        setCurrenciesData({ currencies, status: "success" });
      } catch (error) {
        console.error(error);
        setCurrenciesData({ status: "error", currencies: {} });
      }
    };

    setTimeout(fetchCurrenciesData, 1000);
  }, []);

  return currenciesData;
};

export { useFetchedCurrenciesData };
