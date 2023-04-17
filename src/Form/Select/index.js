import "./style.css";

const Select = () => (
    <div className="form__selectContainer">
        <p>
            <label>
                <select className="form__select" name="form__selectFirstCurrency">
                    <option selected>PLN</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
            </label>
            <label>
                <span className="form__specialText">→</span>
                <select className="form__select" name="form__selectSecondCurrency">
                    <option selected>USD</option>
                    <option>EUR</option>
                    <option>PLN</option>
                </select>
            </label>
        </p>
    </div>
);

export default Select;