import React from 'react';

import './TodoListItem.css'

export default class TodoListItem extends React.Component {

    state = {
        important:false,
    };
    
    onExclamationClick = () => {
        this.setState((prevState) => {
            return {
                important: !prevState.important,
            }
        });
    }

    render(){

        const{ important } = this.state;
        const{ text, onDelete, done, onToggleDone } = this.props;

        let classNames = `TodoListItem`;

        if(done) {
            classNames += ' done'
        }

        if(important) {
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
                        onClick={this.onExclamationClick}
                    >
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}
