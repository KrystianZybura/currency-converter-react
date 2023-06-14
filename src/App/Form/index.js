import WarningMessage from "./WarningMessage";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  StyledForm,
  Fieldset,
  Legend,
  Select,
  SpecialText,
  Input,
  Button,
  Mark,
  Wrapper,
} from "./styled";

const initialCurrencies = ["PLN", "USD"];

const fetchCurrencies = async () => {
  const response = await axios.get(
    "https://api.exchangerate.host/latest?base=PLN"
  );
  const currencies = await response.data;
  return currencies;
};

const INITIAL_INPUT_CURRENCY = initialCurrencies[0];
const INITIAL_OUTPUT_CURRENCY = initialCurrencies[1];

const Form = ({ legend, specialText }) => {
  const [amount, setAmount] = useState();
  const [isFormValid, setIsFormValid] = useState(true);
  const [result, setResult] = useState();
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchCurrencies();
        const keys = Object.keys(fetchedData.rates);

        setCurrencies(keys);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [inputCurrency, setInputCurrency] = useState(INITIAL_INPUT_CURRENCY);
  const [outputCurrency, setOutputCurrency] = useState(INITIAL_OUTPUT_CURRENCY);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchCurrencies();
        setRates(fetchedData.rates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const onInputCurrencyChange = ({ target }) => {
    const newInputCurrency = currencies.find((name) => name === target.value);

    setInputCurrency(newInputCurrency);
    setResult();
    setIsFormValid(true);
  };

  const onOutputCurrencyChange = ({ target }) => {
    const newOutputCurrency = currencies.find((name) => name === target.value);

    setOutputCurrency(newOutputCurrency);
    setResult();
    setIsFormValid(true);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsFormValid(inputCurrency !== outputCurrency);

    setResult((amount / rates[inputCurrency]) * rates[outputCurrency]);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>{legend}</Legend>
        <Clock />
        <Wrapper>
          <label>
            <Select
              name="form__selectinputCurrency"
              value={inputCurrency}
              onChange={onInputCurrencyChange}
            >
              {currencies.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </label>
          <SpecialText>{specialText}</SpecialText>
          <label>
            <Select
              name="form__selectoutputCurrency"
              value={outputCurrency}
              onChange={onOutputCurrencyChange}
            >
              {currencies.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </label>
        </Wrapper>
        <label>
          <Wrapper breakpoint>
            <span>Kwota do przeliczenia:</span>
            <Input
              type="number"
              min="0"
              step="0.01"
              placeholder="Posiadam.."
              required
              value={amount ?? ""}
              onChange={({ target }) => setAmount(target.value)}
            />
            <Mark>{getSymbolFromCurrency(inputCurrency)}.</Mark>
          </Wrapper>
        </label>
        <label>
          <Wrapper breakpoint>
            <span>Kwota po przeliczeniu:</span>
            <Input
              type="number"
              placeholder="Otrzymam.."
              value={result ? result.toFixed(2) : ""}
              readOnly
            />
            <Mark>{getSymbolFromCurrency(outputCurrency)}.</Mark>
          </Wrapper>
        </label>
        {isFormValid ? null : <WarningMessage />}
        <Button>Przelicz!</Button>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
