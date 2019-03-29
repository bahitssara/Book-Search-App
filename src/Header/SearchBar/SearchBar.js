import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   

    handleSubmit(e) {
        e.preventDefault();
        console.log('search clicked')
        
        const booksKey='AIzaSyB6apkLWLVpFlcWlxDu09bOOrrftrvpCAo';
        const url=`https://www.googleapis.com/books/v1/volumes?q=${e.target.searchbar.value}&keys=${booksKey}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
            }

            fetch(url, options)
                .then(res => {
                    if(!res.ok) {
                    throw new Error('Something went wrong');
                    }
                    return res;
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.items)
                    this.props.loadBooks(data.items)
                })
                .catch(err => {
                    this.setState({
                    error:err.message
                    })
                })
        };
    
      

    render(){
        return(
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit}>
                    <label className='search-bar-label'>Search:</label>
                    <input 
                        type='text' 
                        name='searchbar' 
                        placeholder='search books'
                        />
                    <button 
                        type='submit' 
                        className='search-button' 
                        value='searchbar'
                    >Search</button>
                </form>
            </div>
        )
    }
}


export default SearchBar