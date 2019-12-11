import React from "react";

const SpecialButton = (props) => {
  return (
    <button className='calc-button special-button'>{props.button}</button>
  );
};

export default SpecialButton;