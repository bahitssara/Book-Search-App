import React from 'react'
import './Header.css'
import SearchBar from '../Header/SearchBar/SearchBar'

export function Header () {
    return (
        <div className='header-container'>
            <div className='header'>
                <h1>Google Book Search</h1>
            </div>
                <SearchBar />
        </div>
        
    )
}

export default Header;

