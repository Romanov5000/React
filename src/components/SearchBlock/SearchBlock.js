import React from 'react';
import './SearchBlock.css'

const SearchBlock = () => {
    const searchText = 'Search';
    return (
    <div className="SearchBlock">
        <input className="form-control" placeholder = {searchText}
    /></div>);
}

export default SearchBlock;