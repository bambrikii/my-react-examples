import React, {Component} from "react";

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        this.props.onAdd(this.state.name);
    }

    render() {
        return (
            <form>
                <input type="text" name="name" value={this.state.name}
                       onChange={e => this.setState({name: e.target.value})}/>
                <button onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
}