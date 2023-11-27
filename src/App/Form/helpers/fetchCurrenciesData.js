const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchCurrenciesData = () =>
  wait(200).then(() =>
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_AxnuY6UVn9CWr0fqPVWHhlCIKaoADn1eF2Dfad6y&base_currency=EUR"
    ).then((response) => response.json())
  );

export { fetchCurrenciesData };
