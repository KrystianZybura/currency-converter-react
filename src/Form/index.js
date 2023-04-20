import "./style.css";
import WarningMessage from "./WarningMessage";
import { useState } from "react";

const Form = () => {
    const [firstCurrency, setCurrency] = useState("PLN");
    const [secondCurrency, setSecondCurrency] = useState("EUR")

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
        setCurrency(target.value);
        setFirstCurrencyMark(setCurrencyMark(target.value));
    };

    const onSecondSelectChange = ({ target }) => {
        setSecondCurrency(target.value);
        setSecondCurrencyMark(setCurrencyMark(target.value));
    };

    const [identicalCurrencyMarks, validateForm] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        validateForm(firstCurrency === secondCurrency ? true : false);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kantor</legend>
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
                            <span className="form__specialText">⟶</span>
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