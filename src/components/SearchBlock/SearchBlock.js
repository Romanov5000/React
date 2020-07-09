import React from 'react';
import './SearchBlock.css';

export default class SearchBlock extends React.Component {
    state = {
        searchText: '',
    }

    onTextChange = (event) => {
        this.setState({
            searchText: event.target.value,
        });
        this.props.onSearch(event.target.value)
    }

    render() {
            return(
            <div className = "SearchBlock" >
                    <input
                        className="form-control"
                        placeholder='Search'
                        onChange={this.onTextChange}
                        value={this.state.searchText}
                    />
            </div>
        );
    }
}
