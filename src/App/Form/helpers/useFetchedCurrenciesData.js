import axios from "axios";
import { useEffect, useState } from "react";

const CURRENCIES_API_URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_AxnuY6UVn9CWr0fqPVWHhlCIKaoADn1eF2Dfad6y&base_currency=EUR";

const useFetchedCurrenciesData = () => {
  const [currenciesData, setCurrenciesData] = useState({
    status: "loading",
    currencies: {},
  });

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await axios.get(CURRENCIES_API_URL);
        const currencies = await response.data.data;

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
