import "./style.css";

const Input = () => (
    <>
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
                    autofocus
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
                    readonly
                />
                <span>$.</span>
            </label>
        </p>
    </>
);

export default Input;