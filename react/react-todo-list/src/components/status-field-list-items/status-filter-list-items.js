import React, {Component} from 'react';
import './status-filter-list-items.css';

export default class StatusFilterListItems extends Component {

    inputs = [
        {
            name: 'All',
            className: 'btn btn-outline-secondary',
            data: 'all',
            id: 'option1',
        },
        {
            name: 'Active',
            className: 'btn btn-outline-secondary',
            data: 'active',
            id: 'option2',
        },
        {
            name: 'Done',
            className: 'btn btn-outline-secondary',
            data: 'done',
            id: 'option3',
        }
    ];

    render() {

        const {filter, onChangeStatus} = this.props;

        const itemsBox = this.inputs.map(({className, id, data, name}) => {

            const isActive = (data === filter) ? 'btn btn-outline-primary active' : false;

            const itemClass = (isActive) ? isActive : className;

            return (
                <label className={itemClass} key={name}>
                    <input
                        type="radio"
                        name="options"
                        id={id}
                        autoComplete="off"
                        data-filter={data}
                        onClick={() => onChangeStatus(data)}
                    />{name}
                </label>
            )
        });

        return (
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {itemsBox}
            </div>
        )
    }
}