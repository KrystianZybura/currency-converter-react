import "./style.css";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import WarningMessage from "./WarningMessage";
import Legend from "./Legend";
import Fieldset from "./Fieldset";

const Form = () => (
    <form className="form">
        <Fieldset>
            <Legend />
            <Select />
            <Input />
            <WarningMessage />
            <Button />
        </Fieldset>
    </form>
);

export default Form;