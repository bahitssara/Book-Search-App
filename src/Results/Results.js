import React from 'react'
import BookInfo from './BookInfo/BookInfo'

class Results extends React.Component {
    render(){
        console.log(this.props.bookList)
    const bookList= this.props.bookList.map((book, i) => <BookInfo {...book} key={i}/>
)

        return (
            <div>
                { bookList }
            </div>
            
        )
    }
}
    Results.defaultProps = {
        bookList: []
    };


export default Results
