import React from "react";

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import { operators } from "../../../data.js"

const Operators = ({currentTotal, setCurrentTotal, previousTotal, setPreviousTotal, currentOperator, setCurrentOperator}) => {
  // STEP 2 - add the imported data to state
  return (
    <div className='col2'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map((operator, i) => <OperatorButton key = {i} oper = {operator.value} currentTotal = {currentTotal} setCurrentTotal = {setCurrentTotal} previousTotal = {previousTotal} setPreviousTotal = {setPreviousTotal} currentOperator = {currentOperator} setCurrentOperator = {setCurrentOperator}></OperatorButton>)}
    </div>
  );
};

export default Operators
