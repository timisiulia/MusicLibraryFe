import "./Modal.css"
import { ModalFieldComponent } from "./ModalField";

export interface ModalField {
    disabled?:boolean;
    fieldName: string;
    placeholder?:string
    fieldKey:string;
}

export interface ModalProps {
    onClose: () => void;
    onSave:() => void;
    fields: ModalField[];
    open:boolean;
}

export const Modal = (props: ModalProps) => {
    return (
    <>
     {
       props.open ?  
       <div className="modal">
       <div className="modal-content">
         <div onClick={() => props.onClose()} className="close-btn-wrapper">
           <span onClick={() =>props.onClose()} className="close">&times;
           </span>
        </div>
         {
           props.fields.map(field => {
               return <ModalFieldComponent onChange={(value: string) => console.log(value)} field={field}/>
           })
         }
         <div className="save-btn-wrapper">
           <button className="save-btn">SAVE</button>
       </div>
       </div>
     </div> : null
    }
    </>
  )
}