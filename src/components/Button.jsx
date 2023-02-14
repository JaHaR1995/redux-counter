import React from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch({ type: "plus" });
  };
                                                 
  const handleMinus = () =>{
    dispatch({type: "minus"})
  };

  const handleRand = () =>{
    const numberRandom = Math.floor(Math.random() *100);
    dispatch({type: "rand",  payload: numberRandom})  
  }

  const handleSbros = () =>{
    dispatch({type:  "reset"}) 
  }

  return (
    <div className="Buttons">
    <div className="btn">
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleRand}>Rand</button>
      <button onClick={handleSbros}>Reset</button>
    </div>
    </div>  
  );
};
export default Buttons;
