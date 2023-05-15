import WarningMessage from "./WarningMessage";
import { useState } from "react";
import { currencies, exchangeRates, calculateResult } from "./helpers";
import "./style.css";

const INITIAL_INPUT_CURRENCY = currencies[0];
const INITIAL_OUTPUT_CURRENCY = currencies[1];

const Form = ({ legend, specialText }) => {
    const [amount, setAmount] = useState();
    const [isFormValid, setIsFormValid] = useState(true);
    const [result, setResult] = useState();

    const [inputCurrency, setInputCurrency] = useState(INITIAL_INPUT_CURRENCY);
    const [outputCurrency, setOutputCurrency] = useState(INITIAL_OUTPUT_CURRENCY);

    const onInputCurrencyChange = ({ target }) => {
        const newInputCurrency = currencies.find(({ name }) => name === target.value);

        setInputCurrency(newInputCurrency);
        setResult();
        setIsFormValid(true);
    };

    const onOutputCurrencyChange = ({ target }) => {
        const newOutputCurrency = currencies.find(({ name }) => name === target.value);

        setOutputCurrency(newOutputCurrency);
        setResult();
        setIsFormValid(true);
    };

    const onInputChange = ({ target }) => setAmount(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setIsFormValid(inputCurrency.name !== outputCurrency.name);

        const currencyPair = `${inputCurrency.name}/${outputCurrency.name}`;
        setResult(calculateResult(amount, currencyPair, ...exchangeRates));
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{legend}</legend>
                <p className="form__paragraph">
                    <label>
                        <select
                            className="form__select"
                            name="form__selectinputCurrency"
                            value={inputCurrency.name}
                            onChange={onInputCurrencyChange}
                        >
                            {
                                currencies.map(({ name }) =>
                                    <option key={name}>
                                        {name}
                                    </option>
                                )
                            }
                        </select>
                    </label>
                    <span className="form__specialText">{specialText}</span>
                    <label>
                        <select
                            className="form__select"
                            name="form__selectoutputCurrency"
                            value={outputCurrency.name}
                            onChange={onOutputCurrencyChange}
                        >
                            {
                                currencies.map(({ name }) =>
                                    <option key={name}>
                                        {name}
                                    </option>
                                )
                            }
                        </select>
                    </label>
                </p>
                <label>
                    <span className="form__labelText">Kwota do przeliczenia:</span>
                    <input
                        className="form__input"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Posiadam.."
                        required
                        value={amount ?? ""}
                        onChange={onInputChange}
                    />
                    <span className="form__mark">{inputCurrency.mark}.</span>
                </label>
                <label>
                    <span className="form__labelText">Kwota po przeliczeniu:</span>
                    <input
                        className="form__input"
                        type="number"
                        placeholder="Otrzymam.."
                        value={result ? result.toFixed(2) : ""}
                        readOnly
                    />
                    <span className="form__mark">{outputCurrency.mark}.</span>
                </label>
                {isFormValid ? null : <WarningMessage />}
                <p className="form__paragraph">
                    <button className="form__button">Przelicz!</button>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;