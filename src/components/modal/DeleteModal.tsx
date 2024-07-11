
import "./Modal.css"
export interface DeleteModalProps {
    onClose: () => void;
    confirmDelete:(itemId: string) => void;
    open:boolean;
    itemId:string;
    itemName: string;
}
export const DeleteModal = (props: DeleteModalProps) => {
    console.log(props)
    return (
        props.open ?  
       <div className="modal">
       <div className="modal-content">
         <div onClick={() => props.onClose()} className="close-btn-wrapper">
           <span onClick={() =>props.onClose()} className="close">&times;
           </span>
          
        </div>
        <div className="message-wrapper">
        <span className="delete-message">Are you sure you want to delete {props.itemName} ?</span>
        </div>
        <div className="buttons-wrapper-delete">
           <button onClick={() => {props.confirmDelete(props.itemId)}} className="confirm-delete">Delete</button>
           <button onClick={props.onClose} className="close-delete">Cancel</button>
           </div>
       </div>
     </div> : null
    )
}