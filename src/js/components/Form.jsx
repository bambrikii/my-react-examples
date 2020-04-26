import React, { Component } from "react";
import Component1 from "./Component1.jsx"
import "./Form.css"

	class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      buttonValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleChange(event) {
    const {value} = event.target;
    this.setState(() => {
      return {
	value
      };
    });
  }

  handleButtonChange(event) {
    const {buttonValue} = event.target;
    this.setState(() => {
      return {
	buttonValue: "date: " + new Date()
      };
    });
  }

  render() {
    return (
	    <form>
		<input
		    type="text"
		    value={this.state.value}
		    onChange={this.handleChange}
		    />
		<input
		    type="button"
		    value="button1"
		    onClick={this.handleButtonChange}
		    />
		<hr/>
		<span className="hello">{this.state.value}</span><br />
		<span className="span2">{this.state.buttonValue}</span><br />
		<hr />
		<Component1 name={"name: " + this.state.buttonValue} />
	    </form>
	    );
  }
}

export default Form;
