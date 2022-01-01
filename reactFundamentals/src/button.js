import React, { useEffect } from "react";
import { dataObj } from "./data";
import ourSelectors from "./selectors";

console.log("outside IncrementButton component", dataObj);
const name = "Marvel";

function IncrementButton(props) {
  /**
   * come back to this
   * **/
  // const { idButton } = await import("./selectors.js");
  // console.log("idButton inside IncrementButton func", idButton);
  console.log("inside IncrementButton component", dataObj);
  const { children, dataProp, stateObj, id } = props;
  // console.log(document.getElementById("test"));
  // document.getElementById("hi");

  id === "hi"
    ? useEffect(() => {
        console.log("inside useEffect of button", dataObj);
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
