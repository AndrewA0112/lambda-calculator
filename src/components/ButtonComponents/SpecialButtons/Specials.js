import React from "react";

//import any components needed
import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file
import { specials } from "../../../data.js"

const Specials = ({currentTotal, setCurrentTotal, previousTotal, setPreviousTotal, currentOperator, setCurrentOperator}) => {
  // STEP 2 - add the imported data to state

  return (
    <div className= 'row1'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {specials.map((special, i) => <SpecialButton key = {i} spec = {special} currentTotal = {currentTotal} setCurrentTotal = {setCurrentTotal} previousTotal = {previousTotal} setPreviousTotal = {setPreviousTotal} currentOperator = {currentOperator} setCurrentOperator = {setCurrentOperator}/>)}
    </div>
  );
};

export default Specials;
