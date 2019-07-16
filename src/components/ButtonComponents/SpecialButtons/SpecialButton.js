import React from "react";

const SpecialButton = ({spec, currentTotal, setCurrentTotal, previousTotal, setPreviousTotal, currentOperator, setCurrentOperator}) => {

  function handleSpecialClick(special) {
      if(special === 'C'){
        setCurrentTotal(0);
      }
      if(special === '%'){
        setCurrentTotal(parseFloat(currentTotal) / 100)
      }
      if(special === '+/-'){
        setCurrentTotal(parseFloat(currentTotal) * -1)
      }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = 'btn specialBtn' value = {spec} onClick = { () => handleSpecialClick(spec)}>{spec}</button>
    </>
  );
};

export default SpecialButton;