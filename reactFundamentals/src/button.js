import React, { useEffect } from "react";
import { dataObj } from "./data";
import ourSelectors from "./selectors";

console.log(dataObj);
const name = "Marvel";

function IncrementButton(props) {
  const { children, dataProp, stateObj, id } = props;
  // console.log(document.getElementById("test"));
  // document.getElementById("hi");

  id === "hi"
    ? useEffect(() => {
        console.log("inside useEffect of button", dataObj),
          console.log("inside useEffect of button", ourSelectors());
      })
    : null;

  return (
    <button
      id={id == "hi" ? "hi" : null}
      onClick={
        dataProp == "say"
          ? () => {
              // console.log(name);
              dataObj.sayHi("Marvel");
            }
          : () => {
              console.log(stateObj.addOne());
              const testStr = document.getElementById("test").innerText;
              dataObj.addToCount(document.getElementById("test"));
              document.getElementById("hi").focus();
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
