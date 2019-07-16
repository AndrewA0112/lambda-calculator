import React from "react";

//import any components needed
import NumberButton from "./NumberButton"

//Import your array data to from the provided data file
import { numbers } from "../../../data.js"

const Numbers = ({numOne, setNumOne}) => {
  // STEP 2 - add the imported data to state
  return (
    <div className='row2'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}

      {numbers.map((number) => <NumberButton num = {number} numOne = {numOne} setNumOne = {setNumOne} />)}
    </div>
  );
};

export default Numbers;
