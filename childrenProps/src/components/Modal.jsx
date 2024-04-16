

const Modal = (props) => {
  return (
    <div className="" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                 {props.children}
            </div>
        </div> 
    </div>
  )
}

export default Modal