import React, { Component } from "react"
import "./FetchForm.less"

	class FetchForm extends Component {
  constructor() {
    super();
    this.state = {
      result: "no results yey"
    };
    this.helloWorldButtonClick = this.helloWorldButtonClick.bind(this);
    this.goodByeCruelWorldButtonClick = this.goodByeCruelWorldButtonClick.bind(this);
  }

  helloWorldButtonClick(event) {
    fetch("/hello-world")
	    .then(res => res.text())
	    .then((result) => {
	      this.setState({isLoaded: true, result: result});
	    },
		    (error) => {
	      this.setState({isLoaded: true, result: error});
	    }
	    )
  }

  goodByeCruelWorldButtonClick(event) {
    fetch("/good-bye-cruel-world")
	    .then(res => res.text())
	    .then((result) => {
	      this.setState({isLoaded: true, result: result});
	    },
		    (error) => {
	      this.setState({isLoaded: true, result: error});
	    }
	    )
  }

  render() {
    return (
	    <div>
		<input
		    type="button"
		    value="Hello World!"
		    onClick={this.helloWorldButtonClick}
		    />
	    
		<input
		    type="button"
		    value="Good bye cruel World!"
		    onClick={this.goodByeCruelWorldButtonClick}
		    />
		<br />
		Results:
		<xmp className="FetchFormContent">{this.state.result}</xmp>
	    </div>
	    )
  }
  ;
}

export default FetchForm;
