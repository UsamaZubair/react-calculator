import React, { Component } from "react";
import "./App.css";




class App extends Component {

state = {
  input: ""
}

clearbtnHandler = () => {

this.setState({
  input: ""
})
}

EqualHandler = () => {
  this.setState({ input: Math.eval(this.state.input) });
}

operator = (input)  => {

return (isNAN(input) || input == "." || input == "=");

  }

buttonHandler = () => {

    this.operator(input) ? null : "operator" 
   
  };

inputHandler = () => {
  this.setState({
    input: this.state.input + input
  })

}

  render() {

    return (
      <div className="App">

          <div type = "input">
          {this.state.input}
         </div>

        <div class = "row">
          <button on click = {this.clearbtnHandler}>Clear</button>

          <button>÷</button>
          <button on click = {this.inputHandler} value = "*" >*</button>
        </div>

        <div class="row1">
          <button on click = {this.inputHandler} value ="7" >7</button>
          <button on click = {this.inputHandler} value = "8" >8</button>
          <button on click = {this.inputHandler} value = "9" >9</button>
          <button on click = {this.inputHandler} value = "-" >-</button>
        </div>

        <div class="row2">
          <button on click = {this.inputHandler} value = "4" >4</button>
          <button on click = {this.inputHandler} value = "5" >5</button>
          <button on click = {this.inputHandler} value = "6" >6</button>
          <button on click = {this.inputHandler} value = "+" >+</button>
        </div>

        <div class="row3">
          <button on click = {this.inputHandler} value = "1" >1</button>
          <button on click = {this.inputHandler} value = "2" >2</button>
          <button on click = {this.inputHandler} value = "3" >3</button>
          <button on click = {this.EqualHandler} value = "=" >=</button>
        </div>
      </div>
    );
  }
}

export default App;
