import React from "react";

const SpecialButton = ({spec, numOne, setNumOne, numTwo, setNumTwo, isSecond, setIsSecond}) => {

  function handleChange(special) {
    if(special === 'C')
    {
      setNumOne(0);
    }
    if(special === '+/-')
    {
      console.log('Positive / Negative')
    }
    if(special === '%')
    {
      console.log('Remainder')
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = 'btn specialBtn' value = {spec} onClick = { () => handleChange(spec)}>{spec}</button>
    </>
  );
};

export default SpecialButton;