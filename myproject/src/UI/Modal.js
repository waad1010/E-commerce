import React  from "react";
import ReactDOM  from 'react-dom';

import styles from './Modal.module.css'


const BD = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const Overlay = props => { 


     return  <div className={styles.modal}>
            <div className={styles.content}> {props.children } </div>


     </div>
}

const Modal = props => { 



    return (<>
    {ReactDOM.createPortal (<BD onClose = {props.onClose}/>, document.getElementById('overlays'))}
    {ReactDOM.createPortal (<Overlay> {props.children}  </Overlay>, document.getElementById('overlays'))}
    
    
    </>)
    
    ;
}


export default Modal ;