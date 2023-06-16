import Clock from "./Clock";
import LoadingAnimation from "./LoadingAnimation";
import ErrorMessage from "./ErrorMessage";
import getSymbolFromCurrency from "currency-symbol-map";
import { useFetchedCurrenciesData } from "./helpers/useFetchedCurrenciesData";
import { useOnCurrencyChange } from "./helpers/useOnCurrencyChange";
import { useCurrencyConverter } from "./helpers/useCurrencyConverter";
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

const Form = ({ legend, specialText }) => {
  const { currencies, rates, isLoading, isError } = useFetchedCurrenciesData();

  const { inputCurrency, outputCurrency, onCurrencyChange } =
    useOnCurrencyChange(currencies);

  const { amount, result, calculateResult, onAmountChange } =
    useCurrencyConverter(inputCurrency, outputCurrency, rates);

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>{legend}</Legend>
        <Clock />
        {isLoading && <LoadingAnimation />}
        {!isLoading && isError && <ErrorMessage />}
        {!isLoading && !isError && (
          <Wrapper>
            <label>
              <Select
                value={inputCurrency}
                onChange={(event) => onCurrencyChange(event, "input")}
              >
                {currencies.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </Select>
            </label>
            <SpecialText>{specialText}</SpecialText>
            <label>
              <Select
                value={outputCurrency}
                onChange={(event) => onCurrencyChange(event, "output")}
              >
                {currencies.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </Select>
            </label>
          </Wrapper>
        )}
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
              onChange={onAmountChange}
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
        <Button>Przelicz!</Button>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
