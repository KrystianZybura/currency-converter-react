import "./style.css";
import { useState } from "react";

const Form = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    }
    const [currency, setCurrency] = useState("PLN");

    const onSelectChange = ({ target }) => setCurrency(target.value);

    const [secondCurrency, setSecondCurrency] = useState("EUR")

    const onSecondSelectChange = ({ target }) => setSecondCurrency(target.value);

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
                                value={currency}
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
                        <span>zł.</span>
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
                        <span>$.</span>
                    </label>
                </p>
                <p className="hidden js-warningMessage">
                    <span className="form__warningMessage">To wychodzi poza możliwości tego kantora.</span>
                </p>
                <p className="form__paragraph">
                    <button className="form__button">Przelicz!</button>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;