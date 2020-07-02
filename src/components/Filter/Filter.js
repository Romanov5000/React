import React from 'react';

import './Filter.css'



export default class Filter extends React.Component{
    buttonsArr = [
        {name:'all'},
        {name:'active'},
        {name:'done'},
    ]
    render(){
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttonsArr.map(el => {
            const isActive = filter === el.name;
            const classNames = isActive ? 'btn btn-primary' : 'btn btn-outline-secondary';
            return <button className={classNames}
             key ={el.name}
             onClick = {() => onFilterChange(el.name)}>
                {el.name}
             </button>
        })
    return (
    <div className="Filter">
      {buttons}
    </div>)
}
}

