import { ModalField } from "./Modal"
import "./ModalField.css"
export interface ModalFieldProps {
    field: ModalField;
    onChange:(value:string) => void;
}

export const ModalFieldComponent = (props: ModalFieldProps) => {
    return (<div className="field-wrapper">
        <label className="label-field">{props.field.fieldName}</label>
        <input className="input-field" onChange={(event) => {
            props.onChange(event.target.value)
        }} type="text" disabled={props.field.disabled} placeholder={props.field.disabled ? props.field.placeholder : 'Enter text...'}/>
    </div>)
}