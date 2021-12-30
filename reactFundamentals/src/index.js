import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import IncrementButton from "./button";

// import our component here

// function App(props) {
//   return <div>Hello React</div>;
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    //   work with this.state obj
    this.state = {
      count: 0,
      addOne() {
        console.log("hello");
      },
    };
  }
  render() {
    return (
      <React.Fragment>
        <div id="test">Hello React!!!</div>
        <IncrementButton dataProp="say">Say Hi</IncrementButton>
        <IncrementButton dataProp="add" stateObj={this.state}>
          Add One
        </IncrementButton>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-wrapper"));
