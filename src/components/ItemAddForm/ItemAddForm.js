import React from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends React.Component {

    state = {
        inputText: '',
    }
    
    onTextChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
        console.log(event.target.value);
        
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.inputText);
        this.setState({
            inputText: ''
        })
    }
    render () {
        const {inputText} = this.state
    return(
        <div className="ItemAddForm">
            <form onSubmit={this.onSubmit}>
                <input
                className = 'form-control'
                placeholder = ' Add new todos'
                onChange = {this.onTextChange}
                value={inputText} />
            <button
                className="btn btn-primary"
            >Add item</button>
            </form>
        </div>
        
    );
}
}

