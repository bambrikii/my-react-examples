import React, {Component} from "react";
import Add from "./Add.jsx";
import List from "./List.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(name) {
        const list = this.state.list.slice();
        list.push(name);
        this.setState({list});
    }

    render() {
        return (
            <div>
                <Add onAdd={this.handleAdd}/>
                <List data={this.state.list}/>
            </div>
        );
    }
}
