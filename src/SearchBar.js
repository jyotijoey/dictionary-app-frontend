import React, { useState } from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    const [input, setInput] = useState("");
    return (
        <div className="searchBar">
            <input type="text" onChange={(e)=> setInput(e.target.value)} value={input}/> 
            <SearchIcon className="searchBar__icon"/>
        </div>
    )
}

export default SearchBar;