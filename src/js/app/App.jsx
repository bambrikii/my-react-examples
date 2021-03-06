import React, {Component}
  from "react";
import ReactDOM from "react-dom";

import "./App.less";

import Form from "../components/Form.jsx";
import DataForm from "../components/DataForm.jsx";

import logo from "../../images/logo-top-xs.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Tabs, Tab} from "react-bootstrap";
import ErrorBoundary from "../utils/ErrorBoundary.jsx"

import FetchForm from "../MyFetch/FetchForm.jsx"

import reduxStore from "../MyRedux/MyReduxStoreComponentReducers.jsx";
import MyReduxStoreComponentConnected from "../MyRedux/MyReduxStoreComponent.jsx"
import {MyReduxFormConnected, MyReduxFormConnectedSelector} from "../MyRedux/MyReduxForm.jsx"
import myReduxFormStore from "../MyRedux/MyReduxFormReducer.jsx";

import HorizontalNavigation from "../navigation/HorizontalNavigation.jsx";

import {Provider} from 'react-redux';

import MyAgGrid from "../MyAgGrid/MyAgGrid.jsx";
import MyAgGridGrouped from "../MyAgGrid/MyAgGridGrouped.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <HorizontalNavigation/>
          <Row>
            <Col>
              <Tabs defaultActiveKey="my-ag-grid-grouped" id="uncontrolled-tab-example">
                <Tab eventKey="logo" title="Logo">
                  <div className="logo">Logo</div>
                </Tab>
                <Tab eventKey="form" title="Form">
                  <Form></Form>
                </Tab>
                <Tab eventKey="data-form" title="DataForm">
                  <DataForm/>
                </Tab>
                <Tab eventKey="fetch-form" title="FetchForm">
                  <FetchForm/>
                </Tab>
                <Tab eventKey="redux-store" title="ReduxStore">
                  <Provider store={reduxStore}>
                    <MyReduxStoreComponentConnected/>
                  </Provider>
                </Tab>
                <Tab eventKey="redux-form" title="ReduxForm">
                  <Provider store={myReduxFormStore}>
                    <h3>Connected Redux Form</h3>
                    <MyReduxFormConnected onSubmit={(event) => {
                      console.log("App.myReduxFormConnected.onSubmit: values: " + JSON.stringify(event));
                    }}/>

                    <hr/>
                    <h3>Mapped (with State to Props, Dispatch to Props) Redux Form</h3>
                    <MyReduxFormConnectedSelector onSubmit={(values) => {
                      console.log("App.myReduxFormConnectedSelector.onSubmit: values: "
                        + JSON.stringify(values));
                    }}/>
                  </Provider>
                </Tab>
                <Tab eventKey="my-ag-grid" title="AgGrid">
                  <MyAgGrid/>
                </Tab>
                <Tab eventKey="my-ag-grid-grouped" title="AgGrid Grouped">
                  <MyAgGridGrouped/>
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
wrapper ? ReactDOM.render(<App/>, wrapper) : false;