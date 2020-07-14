import React from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends React.Component {

    state = {
        inputText: '',
    }
    
    onTextChange = (event) => {
        this.setState({
            inputText: event.target.value
        }); 
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.inputText);
        this.setState({
            inputText: ''
        });
    }
    render () {
        const {inputText} = this.state
    return(
        <div className="ItemAddForm">
            <form onSubmit={this.onSubmit}>
                <input required
                className = 'form-control form'
                placeholder = ' Add new todos'
                onChange = {this.onTextChange}
                value={inputText} />
            <button
                className="addButton btn btn-primary"
            >Add item</button>
            </form>
            <hr/>
        </div>
        
    );
}
}

