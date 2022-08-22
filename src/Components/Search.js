import './Search.css';
import React from 'react';

const Search = (props) => {

    return(

        <div className="search">
            <input onChange={props.onInput} type="text"/>
        </div>

    );

}

export default Search;