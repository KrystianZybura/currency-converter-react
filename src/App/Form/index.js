import getSymbolFromCurrency from "currency-symbol-map";
import { useQuery } from "react-query";

import Clock from "./Clock";
import ErrorMessage from "./ErrorMessage";
import LoadingAnimation from "./LoadingAnimation";
import { fetchCurrenciesData } from "./helpers/fetchCurrenciesData";
import { getCurrencyKeys } from "./helpers/getCurrencyKeys";
import { useCurrencyConverter } from "./helpers/useCurrencyConverter";
import { useOnCurrencyChange } from "./helpers/useOnCurrencyChange";
import {
  Button,
  Fieldset,
  Input,
  Legend,
  Mark,
  Select,
  SpecialText,
  StyledForm,
  Wrapper,
} from "./styled";

const Form = ({ legend, specialText }) => {
  const {
    data: currencies,
    isLoading,
    isError,
    isSuccess,
  } = useQuery("currencies", fetchCurrenciesData);

  const currencyKeys = getCurrencyKeys(currencies);

  const { inputCurrency, outputCurrency, onCurrencyChange } =
    useOnCurrencyChange(currencyKeys);

  const { amount, result, calculateResult, onAmountChange } =
    useCurrencyConverter(inputCurrency, outputCurrency, currencies);

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
        {isError && <ErrorMessage />}
        {isSuccess && (
          <>
            <Wrapper>
              <label>
                <Select
                  value={inputCurrency}
                  onChange={(event) => onCurrencyChange(event, "input")}
                >
                  {currencyKeys.map((name) => (
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
                  {currencyKeys.map((name) => (
                    <option key={name}>{name}</option>
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
          </>
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
