import React from 'react'
import BookDisplay from './BookInfo/BookDisplay';

class Results extends React.Component {

    loadbookList(bookList) {
        this.setState({
          bookList: bookList
        })
      }  

        render(){

            return(
                <div className='results-container'>
                    <BookDisplay 
                        loadbookList={booklist => this.loadbookList(booklist)}
                        bookList={this.props.bookList}/>
                </div>
        )
    }
}

export default Results
