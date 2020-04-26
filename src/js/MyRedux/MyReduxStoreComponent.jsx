import React, { Component } from "react";
import "./MyReduxStoreComponent.less";
import { connect } from "react-redux";

class MyReduxStoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reducer1: {
	id: "None",
	date: "None"
      },
      reducer2: {
	value1: "None",
	date: "None"
      }
    };
    this.onField1Change = props.onField1Change;
    this.onButton1Click = props.onButton1Click;
    this.onButton2Click = props.onButton2Click;
  }

  render() {
    const toStringIfNotEmpty = function (val) {
      return val ? val.toString() : "";
    }
    return (<div>
	<input type ="text" onChange={this.onField1Change} /><br />
	<input type="button" value="button1" onClick={this.onButton1Click}/><br />
    
	<div className="reducer1Class">
	    <div>{toStringIfNotEmpty(this.props.reducer1Id)}</div>
	    <div>{toStringIfNotEmpty(this.props.reducer1Date)}</div>
	</div>
    
	<input type="button" value="button2" onClick={this.onButton2Click}/><br />
	<div className="reducer2Class">
	    <div>{toStringIfNotEmpty(this.props.reducer2Value1)}</div>
	    <div>{toStringIfNotEmpty(this.props.reducer2Date)}</div>
	</div>
    </div>);
  }
}

const mapStateToProps = (state, props) => {
  console.log("State: " + JSON.stringify(state));
  return {
    reducer1Id: state.reducer1 ? state.reducer1.id : undefined,
    reducer1Date: state.reducer1 ? state.reducer1.date : undefined,
    reducer2Value1: state.reducer2 ? state.reducer2.value1 : undefined,
    reducer2Date: state.reducer2 ? state.reducer2.date : undefined
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onField1Change: event => {
      console.log("subscription event: " + JSON.stringify(event.target.value));
      dispatch({type: "REDUCER1_EVENT1", id: event.target.value});
    },
    onButton1Click: event => {
      console.log("event: " + event.type);
      dispatch({type: "REDUCER1_EVENT1", id: new Date().getTime()});
    },
    onButton2Click: event => {
      console.log("event: " + event.type);
      dispatch({type: "REDUCER2_EVENT1", value1: new Date().getTime()});
    }
  }
}

const MyReduxStoreComponentConnected = connect(mapStateToProps, mapDispatchToProps)(MyReduxStoreComponent);
export default MyReduxStoreComponentConnected;
