import React, {Component} from 'react';
import './list-item.css';

export default class ListItem extends Component {

    render() {

        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            done,
            important
        } = this.props;

        let classNames = 'list-item';

        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span className="list-item-label" onClick={onToggleDone}>{label}</span>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )
    }
}