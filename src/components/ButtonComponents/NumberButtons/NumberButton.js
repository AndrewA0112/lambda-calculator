import React from "react";

const NumberButton = ({num, numOne, setNumOne}) => {

  function handleChange(number) { 
    if(numOne === 0)
    {
      setNumOne(number)
    }
    else {
      setNumOne(numOne + number);
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = 'btn numberBtn' value = {num} onClick = { () => handleChange(num)}>{num}</button>
    </>
  );
};

export default NumberButton;
