import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    render(){
        return(
            <div className='search-bar'>
                <form>
                    <label className='search-bar-label'>Search:</label>
                    <input type='text' name='search-bar-input' placeholder='search books'></input>
                    <button className='search-button'>Search</button>
                </form>
            </div>
        )
    }
}


export default SearchBar