import React, {Component} from "react";

import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {Field,
	reduxForm,
	reducer as formReducer,
	formValueSelector,
	change
	} from "redux-form";

const validateNotEmpty = value => !value ? 'Must enter a value' : null
const InputText = ({ input, label, meta: { touched, error }}) => (<div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type="text" />
    { touched && error && <span className="error">{error}</span>}
</div>);

class CustomRadioField3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.input.name;
    const value = this.props.input.value;
    const onChange = this.props.input.onChange;
    const onRadioChange = (event) => {
      console.log("CustomRadioField3.onChange.event.target.value: " + JSON.stringify(event.target.value));
    }
    return (<React.Fragment>
	<div>
	    <div>
		<input type="radio" name={name} value="radio-val1"
		       onClick={(value) => onChange(value)}
		       checked={value === "radio-val1" ? true : false}
		       onChange={onRadioChange}
		       />
		<label> radio-val1</label>
	    </div>
	    <div>
		<input type="radio" name={name} value="radio-val2"
		       onClick={(value) => onChange(value)}
		       checked={value === "radio-val2" ? true : false}
		       onChange={onRadioChange}
		       />
		<label> radio-val2</label>
	    </div>
	    <div>
		<input type="radio" name={name} value="radio-val3"
		       onClick={(value) => onChange(value)}
		       checked={value === "radio-val3" ? true : false}
		       onChange={onRadioChange}
		       />
		<label> radio-val3</label>
	    </div>
	</div>
    </React.Fragment>);
  }
}

class MyReduxForm extends Component {
  constructor(props) {
    super(props);
    this.onCustomField3Change = this.onCustomField3Change.bind(this);
  }
  onCustomField3Change(event) {
    console.log("onCustomField3Change: " + event);
  }
  render() {
    return (<React.Fragment>
	<form onSubmit={this.props.handleSubmit}>
	    <fieldset>
		<label>SubmitTime:</label>
		{this.props.submitTime}
	    </fieldset>
	    <fieldset>
		<label className="label">Field1:</label>
		{JSON.stringify(this.props.field1)}
		<Field name="field1" component="input" type="text" placeholder="field1"/>
	    </fieldset>
	    <fieldset>
		<label className="label">Custom Field2:</label>
		{JSON.stringify(this.props.customField2)}
		<Field name="customField2" component={InputText} validate={validateNotEmpty} type="text"/>
	    </fieldset>
	    <fieldset>
		<label>Custom Radio Field3:</label>
		{JSON.stringify(this.props.customRadioField3)}
		<Field name="customRadioField3"
		       component={CustomRadioField3}
		       onChange={this.onCustomField3Change}/>
    
	    </fieldset>
	    <input type="submit" value="Complete"/>
	</form>
    </React.Fragment>);
  }
}

export const MyReduxFormConnected = reduxForm({
  form: "MyReduxForm",
  initialValues: {
    field1: "field1value",
    customField2: "customField2value",
    customRadioField3: "radio-val2"
  }
})(MyReduxForm);



const mapStateToProps = state => {
  console.log("mapStateToProps.state: " + JSON.stringify(state));

  const field1 = selector(state, "field1");
  const customField2 = selector(state, "customField2");
  const customRadioField3 = selector(state, "customRadioField3");
  return {
    field1,
    customField2,
    customRadioField3
  };
};

const selector = formValueSelector('MyReduxForm');
const mapDispatchToProps = dispatch => {
  return {
    handleFormSubmit: event => {
      console.log("mapDispatchToProps.handleFormSubmit: " + JSON.stringify(event.form));
      event.preventDefault();
      dispatch({type: 'MY_REDUX_FORM_SUBMIT', payload: event});
    },
    handleSelectChange: (value, type) => {
      console.log("mapDispatchToProps.handleSelectChange: " + value + " " + type);
      this.props.change(value, type);
    }
  }
  ;
};

export const MyReduxFormConnectedSelector = connect(
	mapStateToProps,
	mapDispatchToProps
	)(MyReduxFormConnected);
