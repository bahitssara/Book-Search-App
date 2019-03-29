import React from 'react'
import BookInfo from './BookInfo'

class BookDisplay extends React.Component {
    render(){
    const bookList= this.props.bookList.map((book, i) => <BookInfo {...book} key={i}/>
)

        return (
            <div>
                { bookList }
            </div>
            
        )
    }
}
    BookDisplay.defaultProps = {
        bookList: []
    };


export default BookDisplay