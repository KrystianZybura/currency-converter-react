import WarningMessage from "./WarningMessage";
import { exchangeRates } from "./ExchangeRates";
import { currencies } from "./Currencies";
import { useState } from "react";
import "./style.css";

const Form = ({ legend, specialText, calculateResult, setCurrencyMark }) => {
    const [inputCurrency, setinputCurrency] = useState("PLN");
    const [inputCurrencyMark, setinputCurrencyMark] = useState("zł");

    const [outputCurrency, setoutputCurrency] = useState("USD");
    const [outputCurrencyMark, setoutputCurrencyMark] = useState("$");

    const onSelectChange = ({ target }) => {
        setinputCurrency(target.value);
        setinputCurrencyMark(() => setCurrencyMark(target.value, ...currencies));
    };

    const onSecondSelectChange = ({ target }) => {
        setoutputCurrency(target.value);
        setoutputCurrencyMark(() => setCurrencyMark(target.value, ...currencies));
    };

    const [amount, setAmount] = useState("");

    const onInputChange = ({ target }) => setAmount(target.value);

    const [validatedForm, setValidation] = useState(true);

    const [result, setResult] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setValidation(inputCurrency !== outputCurrency ? true : false);

        const currencyPair = `${inputCurrency}/${outputCurrency}`;
        setResult(() => calculateResult(amount, currencyPair, ...exchangeRates).toFixed(2));
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
                                onChange={onSelectChange}
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
                                onChange={onSecondSelectChange}
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
                            value={result}
                            readOnly
                        />
                        <span>{outputCurrencyMark}.</span>
                    </label>
                </p>
                {validatedForm === true ? "" : <WarningMessage />}
                <p className="form__paragraph">
                    <button className="form__button">Przelicz!</button>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;