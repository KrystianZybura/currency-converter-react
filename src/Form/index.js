import WarningMessage from "./WarningMessage";
import { useState } from "react";
import { currencies, exchangeRates, calculateResult } from "./Helpers";
import "./style.css";

const INITIAL_INPUT_CURRENCY = currencies[0];
const INITIAL_OUTPUT_CURRENCY = currencies[1];

const Form = ({ legend, specialText }) => {
    const [amount, setAmount] = useState(undefined);
    const [isFormValid, setIsFormValid] = useState(true);
    const [result, setResult] = useState(undefined);

    const [inputCurrency, setInputCurrency] = useState(INITIAL_INPUT_CURRENCY);
    const [outputCurrency, setOutputCurrency] = useState(INITIAL_OUTPUT_CURRENCY);

    const onInputCurrencyChange = ({ target }) => {
        const newInputCurrency = currencies.find(({ name }) => name === target.value);

        setInputCurrency(newInputCurrency);
        setResult(undefined);
        setIsFormValid(true);
    };

    const onOutputCurrencyChange = ({ target }) => {
        const newOutputCurrency = currencies.find(({ name }) => name === target.value);

        setOutputCurrency(newOutputCurrency);
        setResult(undefined);
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
                <div className="form__selectContainer">
                    <p>
                        <label>
                            <select
                                className="form__select"
                                name="form__selectinputCurrency"
                                value={inputCurrency.name}
                                onChange={onInputCurrencyChange}
                            >
                                {
                                    currencies.map(({ id, name }) =>
                                        <option key={id}>
                                            {name}
                                        </option>
                                    )
                                }
                            </select>
                        </label>
                        <label>
                            <span className="form__specialText">{specialText}</span>
                            <select
                                className="form__select"
                                name="form__selectoutputCurrency"
                                value={outputCurrency.name}
                                onChange={onOutputCurrencyChange}
                            >
                                {
                                    currencies.map(({ id, name }) =>
                                        <option key={id}>
                                            {name}
                                        </option>
                                    ).reverse()
                                }
                            </select>
                        </label>
                    </p>
                </div>
                <p>
                    <label>
                        <span className="form__labelText">Kwota do przeliczenia:</span>
                        <input
                            className="form__input"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="Posiadam.."
                            required
                            value={amount}
                            onChange={onInputChange}
                        />
                        <span>{inputCurrency.mark}.</span>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Kwota po przeliczeniu:</span>
                        <input
                            className="form__input"
                            type="number"
                            placeholder="Otrzymam.."
                            value={result ? result.toFixed(2) : ""}
                            readOnly
                        />
                        <span>{outputCurrency.mark}.</span>
                    </label>
                </p>
                {isFormValid ? null : <WarningMessage />}
                <p className="form__paragraph">
                    <button className="form__button">Przelicz!</button>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;