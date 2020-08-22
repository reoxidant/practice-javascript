import React, {Component} from "react";
import './search-bar-list-items.css';

export default class SearchBarListItems extends Component {

    state = {
        text: ''
    };

    onSearch = (e) => {
        this.setState({
            text: e.target.value
        });

        const {onSearchListItem} = this.props;
        onSearchListItem(e.target.value);
    };

    render() {
        const searchElemText = 'Type here to search';
        const searchStyle = {
            fontSize: '18px'
        };

        return (
            <input
                className="search-input-bar form-control"
                type="text"
                placeholder={searchElemText}
                style={searchStyle}
                value={this.state.text}
                onChange={this.onSearch}
            />
        )
    }
};