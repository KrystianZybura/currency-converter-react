import "./style.css";
import WarningMessage from "./WarningMessage";
import { exchangeRates } from "./ExchangeRates";
import { useState } from "react";

const Form = ({ legend, specialText }) => {
    const [firstCurrency, setFirstCurrency] = useState("PLN");
    const [secondCurrency, setSecondCurrency] = useState("USD");

    const [firstCurrencyMark, setFirstCurrencyMark] = useState("zł");
    const [secondCurrencyMark, setSecondCurrencyMark] = useState("€");

    const setCurrencyMark = (currency) => {
        switch (currency) {
            case "EUR":
                return "€";

            case "USD":
                return "$";

            default:
                return "zł";
        };
    };

    const onSelectChange = ({ target }) => {
        setFirstCurrency(target.value);
        setFirstCurrencyMark(setCurrencyMark(target.value));
    };

    const onSecondSelectChange = ({ target }) => {
        setSecondCurrency(target.value);
        setSecondCurrencyMark(setCurrencyMark(target.value));
    };

    const [identicalCurrencyMarks, checkForIdenticalMarks] = useState(false);

    const validateForm = () => {
        checkForIdenticalMarks(firstCurrency === secondCurrency ? true : false);
    };

    const [amount, setAmount] = useState("");

    const onInputChange = ({ target }) => setAmount(target.value);

    const [result, setResult] = useState("");

    const calculateResult = (amount, { eurToPlnRate, usdToEurRate, usdToPlnRate }) => {
        const currencyPair = `${firstCurrency}/${secondCurrency}`;

        switch (currencyPair) {
            case "PLN/EUR":
                return amount * eurToPlnRate;

            case "PLN/USD":
                return amount * usdToPlnRate;

            case "USD/PLN":
                return amount / usdToPlnRate;

            case "USD/EUR":
                return amount * usdToEurRate;

            case "EUR/USD":
                return amount / usdToPlnRate;

            case "EUR/PLN":
                return amount / eurToPlnRate;

            default:
                return NaN;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        validateForm();
        setResult(calculateResult(amount, ...exchangeRates).toFixed(2));
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
                                <option>PLN</option>
                                <option>EUR</option>
                                <option>USD</option>
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
                                <option>USD</option>
                                <option>EUR</option>
                                <option>PLN</option>
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
                            onChange={() => calculateResult(amount)}
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