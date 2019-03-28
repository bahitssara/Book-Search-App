import React, { Component } from 'react';
import Header from '../src/Header/Header'
import Results from '../src/Results/Results'

class App extends Component{ 
  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
      searchInput: '',
      error: null
    }
  }

  loadBooks = (bookList) => {
    this.setState({
      bookList: bookList
    })
  }

  

  componentDidMount(){
    const booksKey='AIzaSyB6apkLWLVpFlcWlxDu09bOOrrftrvpCAo';
    const url=`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&keys=${booksKey}`;
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
        console.log(data)
        this.setState({
          bookList: data.items
        })
      })
      .catch(err => {
        this.setState({
          error:err.message
        })
      })
  }
  render(){
    return(
      <div>
       <Header 
       loadBooks={this.loadBooks}/>
       <Results 
       bookList={this.state.bookList}/>
      </div>
    )
  }
}
export default App;
