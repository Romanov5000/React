import React from 'react';

import './TodoListItem.css'

const TodoListItem = (props) => {

    const { text, onDelete, done, onToggleDone, onToggleImportant, important } = props;

    let classNames = `TodoListItem`;

    if (done) {
        classNames += ' done'
    }

    if (important) {
        classNames += ' important';
    }


    return (
        <div className={classNames}>
            <span onClick={onToggleDone}>
                {text}
            </span>
            <div>
                <button
                    className="btn btn-outline-danger remove-btn"
                    onClick={onDelete}
                >
                    <i className="fa fa-trash"></i>
                </button>
                <button
                    className="btn btn-outline-primary"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        </div>
    );

}
export default TodoListItem;
