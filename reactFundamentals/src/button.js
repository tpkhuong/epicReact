import React from "react";
import { dataObj } from "./data";

console.log(dataObj);
const name = "Marvel";

function IncrementButton(props) {
  const { children, dataProp, stateObj } = props;
  console.log(document.getElementById("test"));
  return (
    <button
      onClick={
        dataProp == "say"
          ? () => {
              // console.log(name);
              dataObj.sayHi("Marvel");
            }
          : () => {
              console.log(stateObj);
              const testStr = document.getElementById("test").innerText;
              dataObj.addToCount(document.getElementById("test"));
            }
      }
    >
      {children}
    </button>
  );
}

export default IncrementButton;

/** 
    <button onClick={dataObj.sayHi.bind({ name: "Marvel" })}>{children}</button>
 * 
 * **/
