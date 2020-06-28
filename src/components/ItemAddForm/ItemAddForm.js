import React from 'react';

import './ItemAddForm.css';

const ItemAddForm = (props) => {
    const { onAdd } = props;
    return(
        <div className="ItemAddForm">
            <button
                className="btn btn-primary"
                onClick={() => onAdd('Learn React')}
            >Add item</button>
        </div>
    );
}

export default ItemAddForm;