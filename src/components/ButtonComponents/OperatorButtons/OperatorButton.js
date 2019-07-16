import React from "react";

const OperatorButton = ({oper, currentTotal, setCurrentTotal, previousTotal, setPreviousTotal, currentOperator, setCurrentOperator}) => {
  
  function handleOperatorChange(operator) {
    if(operator !== '='){
      setCurrentOperator(operator)
      console.log('Clicked Operator', operator)
      setPreviousTotal(currentTotal)
      setCurrentTotal(0)
      console.log(currentTotal, previousTotal)
    }
    else {
      if(currentOperator === '+'){
        setCurrentTotal(parseFloat(currentTotal) + parseFloat(previousTotal))
      }
      if(currentOperator === '*'){
        setCurrentTotal(parseFloat(currentTotal) * parseFloat(previousTotal))
      }
      if(currentOperator === '-'){
        setCurrentTotal(parseFloat(currentTotal) - parseFloat(previousTotal))
      }
      if(currentOperator === '/'){
        setCurrentTotal(parseFloat(currentTotal) / parseFloat(previousTotal))
      }
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = 'btn operatorBtn' value = {oper} onClick = { () => handleOperatorChange(oper)} >{oper}</button>
    </>
  );
};

export default OperatorButton;