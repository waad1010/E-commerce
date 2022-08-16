import React from "react";


const Message = (props) => {

    return (<div className={`${props.status} box`}>
    {props.text}
  </div>)

}
export default Message;