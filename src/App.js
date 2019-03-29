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

  render(){
    return(
      <div>
       <Header />
       <Results bookList={this.state.bookList}
       />
      </div>
    )
  }
}

export default App;
