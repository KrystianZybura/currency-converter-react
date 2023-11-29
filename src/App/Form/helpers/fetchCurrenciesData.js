import axios from "axios";

const CURRENCIES_API_KEY =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_AxnuY6UVn9CWr0fqPVWHhlCIKaoADn1eF2Dfad6y&base_currency=EUR";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchCurrenciesData = async () => {
  await wait(200);

  const response = await axios.get(CURRENCIES_API_KEY);

  return response.data.data;
};

export { fetchCurrenciesData };
