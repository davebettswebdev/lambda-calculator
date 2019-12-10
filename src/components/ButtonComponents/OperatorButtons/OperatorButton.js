import React from "react";

const OperatorButton = (props) => {
  return (
    <button className='calc-button operator-button'>{props.button.char}</button>
  );
};

export default OperatorButton;