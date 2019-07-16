import React from "react";

//import any components needed
import NumberButton from "./NumberButton"

//Import your array data to from the provided data file
import { numbers } from "../../../data.js"

const Numbers = ({currentTotal, setCurrentTotal, previousTotal, setPreviousTotal, currentOperator, setCurrentOperator}) => {
  // STEP 2 - add the imported data to state
  return (
    <div className='row2'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}

      {numbers.map((number, i) => <NumberButton key = {i} num = {number} currentTotal = {currentTotal} setCurrentTotal = {setCurrentTotal} previousTotal = {previousTotal} setPreviousTotal = {setPreviousTotal} currentOperator = {currentOperator} setCurrentOperator = {setCurrentOperator}/>)}
    </div>
  );
};

export default Numbers;
