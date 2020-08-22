import HeaderApp from '../header-app';
import SearchBarListItems from '../search-bar-list-items';
import StatusFieldListItems from '../status-field-list-items';
import GroupListItems from '../group-list-items';
import AddListItem from '../add-list-item';
import './app.css';
import React, {Component} from 'react';

export default class App extends Component {

    itemId = 1;

    state = {
        listData: [
            this.createListItem('Create New Feature'),
            this.createListItem('Git Commit App'),
            this.createListItem('Do more Code')
        ],
        text: '',
        filter: 'all' // active, all, done
    };

    createListItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.itemId++
        }
    }

    findIndex = (data, id) => {
        return data.findIndex((el) => el.id === id);
    };

    deleteItem = (id) => {
        this.setState(({listData}) => {

            const elem_id = this.findIndex(listData, id);

            const newArray = [
                ...listData.slice(0, elem_id),
                ...listData.slice(elem_id + 1)
            ];

            return {
                listData: newArray
            }
        })
    };

    addElement = (text) => {

        const newItem = this.createListItem(text);

        this.setState(({listData}) => {
            return {
                listData: [...listData, newItem] //добавили элемент в конец массива
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const elem_id = this.findIndex(arr, id);

        const oldItem = arr[elem_id];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        //create new array

        return [
            ...arr.slice(0, elem_id),
            newItem,
            ...arr.slice(elem_id + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({listData}) => {
            return {
                listData: this.toggleProperty(listData, id, 'important')
            };
        })
    };

    onToggleDone = (id) => {
        this.setState(({listData}) => {
            return {
                listData: this.toggleProperty(listData, id, 'done')
            };
        })
    };

    searchLabel = (listData, text) => {
        if (text.length == 0) {
            return listData;
        }

        return listData.filter((item) => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    };

    onSearchListItem = (text) => {
        this.setState({text});
    };

    listFilter = (listData, filter) => {
        switch (filter) {
            case 'all':
                return listData;
            case 'active':
                return listData.filter((item) => !item.done);
            case 'done':
                return listData.filter((item) => item.done);
            default:
                return listData;
        }
    };

    onChangeStatus = (filter) => {
        this.setState({filter});
    };

    render() {

        const {listData, text, filter} = this.state;

        const visibleItems = this.listFilter(this.searchLabel(listData, text), filter);

        const countDoneTasks = listData.filter(
            (item) => item.done
        ).length;

        const countNeedToDoTasks = listData.length - countDoneTasks;

        return (
            <div className="app mx-auto">
                <HeaderApp countNeedToDoTasks={countNeedToDoTasks} countDoneTasks={countDoneTasks}/>
                <div className="action-panel d-flex">
                    <SearchBarListItems onSearchListItem={this.onSearchListItem}/>
                    <StatusFieldListItems onChangeStatus={this.onChangeStatus} filter={filter}/>
                </div>
                <GroupListItems
                    list={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddListItem onAddElement={this.addElement}/>
            </div>
        )
    }
};