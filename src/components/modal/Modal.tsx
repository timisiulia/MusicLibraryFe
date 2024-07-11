import { useState } from "react";
import "./Modal.css"
import { ModalFieldComponent } from "./ModalField";
import { DataType } from "../../services/util";

export interface ModalField {
    disabled?:boolean;
    fieldName: string;
    placeholder?:string
    fieldKey:string;
}

export interface ModalProps {
    onClose: () => void;
    onSave:(data:any) => void;
    fields: ModalField[];
    open:boolean;
}

export const Modal = (props: ModalProps) => {
   const[modalValues,setValues] = useState<{[key:string]:string}>({})
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
               return <ModalFieldComponent key={field.fieldKey}
                onChange={(value: string) => {
                  setValues({...modalValues,[field.fieldKey]:value})
                }} 
                field={field}/>
           })
         }
         <div className="save-btn-wrapper">
           <button onClick={() => {props.onSave(modalValues)}} className="save-btn">SAVE</button>
       </div>
       </div>
     </div> : null
    }
    </>
  )
}