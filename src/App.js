import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import Container from "./Container";

function App() {

  const setCurrencyMark = (currency, ...currencies) => currencies.map(({ name, mark }) => name === currency ? mark : "");

  const calculateResult = (amount, currencyPair, { eurToPlnRate, usdToEurRate, usdToPlnRate }) => {
    switch (currencyPair) {
      case "PLN/EUR":
        return amount / eurToPlnRate;

      case "PLN/USD":
        return amount / usdToPlnRate;

      case "USD/PLN":
        return amount * usdToPlnRate;

      case "USD/EUR":
        return amount * usdToEurRate;

      case "EUR/USD":
        return amount / usdToEurRate;

      case "EUR/PLN":
        return amount * eurToPlnRate;

      default:
        return NaN;
    };
  };

  return (
    <Container>
      <Header
        title="Kalkulator walut"
      />
      <Main
        body={
          <Form
            legend={"Kantor"}
            specialText={"------->"}
            calculateResult={calculateResult}
            setCurrencyMark={setCurrencyMark}
          />
        }
      />
      <Footer
        copyright={"Copyright © 2023 "}
        exampleMail={"Example_email@gmail.com"}
      />
    </Container>
  );
};

export default App;
