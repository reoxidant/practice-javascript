import React, {Component} from 'react';
import './add-list-item.css';

export default class AddListItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        const {onAddElement} = this.props;

        e.preventDefault();

        onAddElement(this.state.label);

        this.setState({
            label: ''
        });
    };

    render() {

        return (
            <form className="add-list-item input-group mb-3 mt-2" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Text of element"
                    value={this.state.label}
                    aria-label="Add element to the tasks list"
                    aria-describedby="button-add"
                    onChange={this.onLabelChange}>
                </input>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" id="button-add">Add element</button>
                </div>
            </form>
        )

    }
};