import "./style.css";
import WarningMessage from "./WarningMessage";
import { exchangeRates } from "./ExchangeRates";
import { currencies } from "./Currencies";
import { useState } from "react";

const Form = ({ legend, specialText, calculateResult }) => {
    const [firstCurrency, setFirstCurrency] = useState("PLN");
    const [secondCurrency, setSecondCurrency] = useState("USD");

    const [firstCurrencyMark, setFirstCurrencyMark] = useState("zł");
    const [secondCurrencyMark, setSecondCurrencyMark] = useState("$");

    const setCurrencyMark = (currency) => currencies.map(({ name, mark }) => name === currency ? mark : "");

    const onSelectChange = ({ target }) => {
        setFirstCurrency(target.value);
        setFirstCurrencyMark(setCurrencyMark(target.value));
    };

    const onSecondSelectChange = ({ target }) => {
        setSecondCurrency(target.value);
        setSecondCurrencyMark(setCurrencyMark(target.value));
    };

    const [identicalCurrencyMarks, checkForIdenticalMarks] = useState(false);
    const validateForm = () => checkForIdenticalMarks(firstCurrency === secondCurrency ? true : false);

    const [amount, setAmount] = useState("");
    const onInputChange = ({ target }) => setAmount(target.value);

    const [result, setResult] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        validateForm();

        const currencyPair = `${firstCurrency}/${secondCurrency}`;
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
                                name="form__selectFirstCurrency"
                                value={firstCurrency}
                                onChange={onSelectChange}
                            >
                                {currencies.map(({ id, name }) => <option key={id}>{`${name}`}</option>)}
                            </select>
                        </label>
                        <label>
                            <span className="form__specialText">{specialText}</span>
                            <select
                                className="form__select"
                                name="form__selectSecondCurrency"
                                value={secondCurrency}
                                onChange={onSecondSelectChange}
                            >
                                {currencies.map(({ id, name }) => <option key={id}>{`${name}`}</option>).reverse()}
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
                        <span>{firstCurrencyMark}.</span>
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
                        <span>{secondCurrencyMark}.</span>
                    </label>
                </p>
                {identicalCurrencyMarks === true ? <WarningMessage /> : ""}
                <p className="form__paragraph">
                    <button className="form__button">Przelicz!</button>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;