import React from "react";

const NumberButton = ({num, currentTotal, setCurrentTotal, previousTotal, setPreviousTotal, currentOperator, setCurrentOperator}) => {

  function handleNumberChange(number) {
    if(currentTotal === 0)
    {
      setCurrentTotal(number)
    }
    else {
      setCurrentTotal(currentTotal + number)
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = 'btn numberBtn' value = {num} onClick = { () => handleNumberChange(num)}>{num}</button>
    </>
  );
};

export default NumberButton;
