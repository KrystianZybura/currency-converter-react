import WarningMessage from "./WarningMessage";
import { useState } from "react";
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

let currencies = [
  { name: "PLN", mark: "zł" },
  { name: "USD", mark: "$" },
  { name: "EUR", mark: "€" },
  { name: "GBP", mark: "£" },
];

const getProducts = async () => {
  const promise = await axios.get("https://api.exchangerate.host/symbols");
  const products = await promise.data;
  const keys = Object.keys(products.symbols);
  return keys;
};

const INITIAL_INPUT_CURRENCY = currencies[0];
const INITIAL_OUTPUT_CURRENCY = currencies[1];

const Form = ({ legend, specialText }) => {
  const [amount, setAmount] = useState();
  const [isFormValid, setIsFormValid] = useState(true);
  const [result, setResult] = useState();

  const [inputCurrency, setInputCurrency] = useState(INITIAL_INPUT_CURRENCY);
  const [outputCurrency, setOutputCurrency] = useState(INITIAL_OUTPUT_CURRENCY);

  const onInputCurrencyChange = ({ target }) => {
    const newInputCurrency = currencies.find(
      ({ name }) => name === target.value
    );

    setInputCurrency(newInputCurrency);
    setResult();
    setIsFormValid(true);
  };

  const onOutputCurrencyChange = ({ target }) => {
    const newOutputCurrency = currencies.find(
      ({ name }) => name === target.value
    );

    setOutputCurrency(newOutputCurrency);
    setResult();
    setIsFormValid(true);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsFormValid(inputCurrency.name !== outputCurrency.name);
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
              value={inputCurrency.name}
              onChange={onInputCurrencyChange}
            >
              {currencies.map(({ name }) => (
                <option key={name}>{name}</option>
              ))}
            </Select>
          </label>
          <SpecialText>{specialText}</SpecialText>
          <label>
            <Select
              name="form__selectoutputCurrency"
              value={outputCurrency.name}
              onChange={onOutputCurrencyChange}
            >
              {(async () => {
                const currencies = await getProducts();
                console.log(currencies);
                currencies.map((item) => <option>{item}</option>);
              })()}
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
            <Mark>{inputCurrency.mark}.</Mark>
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
            <Mark>{outputCurrency.mark}.</Mark>
          </Wrapper>
        </label>
        {isFormValid ? null : <WarningMessage />}
        <Button>Przelicz!</Button>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
