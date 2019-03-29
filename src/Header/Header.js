import React from 'react'
import './Header.css'
import SearchBar from '../Header/SearchBar/SearchBar'
import FilterOptions from './FilterOptions/FilterOptions';

export function Header () {
    return (
        <div className='header-container'>
            <div className='header'>
                <h1>Google Book Search</h1>
            </div>
                <SearchBar loadbookList={(bookList) => this.state.loadbookList(bookList)}
                />
                <FilterOptions />
        </div>
        
    )
}

export default Header;

