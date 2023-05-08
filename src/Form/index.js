import WarningMessage from "./WarningMessage";
import { exchangeRates } from "./ExchangeRates";
import { currencies } from "./Currencies";
import { calculateResult } from "./CalculateResult";
import { getCurrencyMark } from "./GetCurrencyMark";
import { useState } from "react";
import "./style.css";

const Form = ({ legend, specialText }) => {
    const [amount, setAmount] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [result, setResult] = useState("");

    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [inputCurrencyMark, setInputCurrencyMark] = useState("zł");

    const [outputCurrency, setOutputCurrency] = useState("USD");
    const [outputCurrencyMark, setOutputCurrencyMark] = useState("$");

    const onInputCurrencyChange = ({ target }) => {
        setInputCurrency(target.value);
        setInputCurrencyMark(getCurrencyMark(target.value, ...currencies));
        setResult("");
        setIsFormValid(true);
    };

    const onOutputCurrencyChange = ({ target }) => {
        setOutputCurrency(target.value);
        setOutputCurrencyMark(getCurrencyMark(target.value, ...currencies));
        setResult("");
        setIsFormValid(true);
    };

    const onInputChange = ({ target }) => setAmount(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setIsFormValid(inputCurrency !== outputCurrency);

        const currencyPair = `${inputCurrency}/${outputCurrency}`;
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
                                value={inputCurrency}
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
                                value={outputCurrency}
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
                        <span>{inputCurrencyMark}.</span>
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
                        <span>{outputCurrencyMark}.</span>
                    </label>
                </p>
                {isFormValid ? "" : <WarningMessage />}
                <p className="form__paragraph">
                    <button className="form__button">Przelicz!</button>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;