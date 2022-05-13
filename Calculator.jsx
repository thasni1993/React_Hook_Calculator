import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value.concat(e.target.name));
    
  };

  const opClick = (e) => {
    var l = value.charAt(value.length - 1);
    if (l !== "+") {
      setValue(value.concat(e.target.name));
    }
  };
  const clear = () => {
    setValue("");
  };
  const backspace = () => {
    setValue(value.slice(0, value.length - 1)); //or (0,-1)
  };
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (err) {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={value} readOnly />
      </form>
      <div className="keypad">
        <button onClick={clear} className="offwhite" id="clear">
          AC
        </button>
        <button onClick={backspace} className="offwhite" id="backspace">
          C
        </button>
        <button name="%" onClick={handleClick} className="offwhite">
          %
        </button>
        <button name="/" onClick={handleClick} className="orange-color">
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick} className="orange-color">
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick} className="orange-color">
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={opClick} className="orange-color">
          +
        </button>
        <button name="0" onClick={handleClick} id="zero">
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="=" onClick={calculate} className="orange-color">
          =
        </button>
      </div>
    </div>
  );
}
