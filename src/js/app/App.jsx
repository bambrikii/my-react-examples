import React, { Component }
from "react";
import ReactDOM from "react-dom";

import "./App.css";

import Form from "../components/Form.jsx";
import DataForm from "../components/DataForm.jsx";

import logo from "../../images/logo-top-xs.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ErrorBoundary from "../utils/ErrorBoundary.jsx"

import FetchForm from "../MyFetch/FetchForm.jsx"

import reduxStore from "../MyRedux/MyReduxStoreComponentReducers.jsx";
import MyReduxStoreComponentConnected from "../MyRedux/MyReduxStoreComponent.jsx"
import { MyReduxFormConnected, MyReduxFormConnectedSelector } from "../MyRedux/MyReduxForm.jsx"
import myReduxFormStore from "../MyRedux/MyReduxFormReducer.jsx";

import HorizontalNavigation from "../navigation/HorizontalNavigation.jsx";

import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
	    <div>
		<Container>
		    <HorizontalNavigation />
		    <Row>
			<Col>
			<Tabs defaultActiveKey="redux-form" id="uncontrolled-tab-example">
			    <Tab eventKey="logo" title="Logo">
				<div className="logo" >Logo</div>
			    </Tab>
			    <Tab eventKey="form" title="Form">
				<Form></Form>
			    </Tab>
			    <Tab eventKey="data-form" title="DataForm">
				<DataForm />
			    </Tab>
			    <Tab eventKey="fetch-form" title="FetchForm">
				<FetchForm />
			    </Tab>
			    <Tab eventKey="redux-store" title="ReduxStore">
				<Provider store={reduxStore}>
				    <MyReduxStoreComponentConnected/>
				</Provider>
			    </Tab>
			    <Tab eventKey="redux-form" title="ReduxForm">
				<Provider store={myReduxFormStore}>
				    <MyReduxFormConnected onSubmit={(event) => {
					console.log("App.myReduxFormConnected.onSubmit: values: " + JSON.stringify(event));
							    }}/>
	    
				    <hr/>
				    <MyReduxFormConnectedSelector onSubmit={(event) => {
					console.log("App.myReduxFormConnectedSelector.onSubmit: values: "
						+ JSON.stringify(event));
								    }}/>
				</Provider>
			    </Tab>
			</Tabs>
			</Col>
		    </Row>
		</Container>
	    </div>
	    );
  }
}

export default App

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;