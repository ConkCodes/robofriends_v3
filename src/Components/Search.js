import './Search.css';
import React from 'react';

const Search = (props) => {
    return(
        <div className="search">
            <input 
                className="input" 
                onChange={props.onInput} 
                type="text" 
                placeholder="Search Robots"
            />
        </div>
    );
}

export default Search;