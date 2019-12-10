import React from "react";

const NumberButton = () => {
  return (
    <button onClick={ () => {
      props.set(props.total + props.button)
     
    }}
    
      className='calc-button number-button'>{props.button}</button>
  );
};

export default NumberButton;
