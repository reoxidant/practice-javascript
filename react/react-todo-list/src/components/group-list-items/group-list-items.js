import React from "react";
import ListItem from '../list-item';
import './group-list-items.css'

const GroupListItems = ({list, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = list.map((item) => {

        const {id, ...otherItemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <ListItem
                    {...otherItemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        )
    });

    return (
        <ul className="list-group main-group-list">
            {elements}
        </ul>
    )
};

export default GroupListItems;