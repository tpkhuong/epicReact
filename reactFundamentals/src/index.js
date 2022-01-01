import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import IncrementButton from "./button";
import { dataObj } from "./data";
import ourSelectors from "./selectors";

/**
 * import run first IncrementButton
 * code in IncrementButton component will run
 * then code in this module file
 * then code in component
 * then render
 * **/
console.log("selector in App component", ourSelectors());
console.log("outside App component", dataObj);

// import our component here

// function App(props) {
//   return <div>Hello React</div>;
// }
class App extends React.Component {
  constructor(props) {
    console.log("constructor App component", dataObj);
    super(props);
    //   work with this.state obj
    this.state = {
      count: 0,
      selectors: {},
      addOne() {
        this.count++;
        console.log(this.count);
      },
    };
  }
  render() {
    console.log(document.getElementById("test"));

    return (
      <React.Fragment>
        <div id="test" tabIndex="0">
          Hello React!!!
        </div>
        <IncrementButton id="hi" dataProp="say">
          Say Hi
        </IncrementButton>
        <IncrementButton dataProp="add" stateObj={this.state}>
          Add One
        </IncrementButton>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-wrapper"));
