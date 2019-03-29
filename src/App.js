import React, { Component } from 'react';
import Header from '../src/Header/Header'
import Results from '../src/Results/Results'

class App extends Component{ 
  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
      searchInput: '',
    }
  }

  loadbookList = (bookList) => {
    this.setState({
      bookList: bookList
    })
  };

  componentDidMount(){
    const booksKey='AIzaSyB6apkLWLVpFlcWlxDu09bOOrrftrvpCAo';
    const url=`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&keys=${booksKey}`;
    

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong');
        }
        return res.json();
      })
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
       loadbookList={this.loadbookList}/>
       <Results bookList={this.state.bookList}
       />
      </div>
    )
  }
}

export default App;
