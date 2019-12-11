import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton';


// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import { numbers } from '../../../data' 

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  return (
    <div className='numbers-container'>
      {numberState.map( (item, index) => (
        <NumberButton total={props.total} set={props.set} key={index} button={item}/>
      )) }
    </div>
  );
};

export default Numbers;