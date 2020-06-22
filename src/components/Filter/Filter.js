import React from 'react';

import './Filter.css'



const Filter = () =>{
    return (
    <div className="Filter">
        <button className="btn btn-primary">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button>
    </div>)
}



export default Filter;