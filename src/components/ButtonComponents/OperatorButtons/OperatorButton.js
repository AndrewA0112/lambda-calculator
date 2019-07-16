import React from "react";

const OperatorButton = ({oper, numOne, setNumOne, numTwo, setNumTwo, isSecond, setIsSecond}) => {

  function handleChange(operator) {
    console.log('test')
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = 'btn operatorBtn' value = {oper} onClick = { () => handleChange(oper)} >{oper}</button>
    </>
  );
};

export default OperatorButton;