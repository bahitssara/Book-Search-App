import React from 'react'
import './BookInfo.css'


class BookInfo extends React.Component{
    render(){
        return(
            <div className='book-info-container'>
            <img 
                className='book-images' 
                src={this.props.volumeInfo.imageLinks.thumbnail}
                alt='book'/>
            <h2>Book Title:{this.props.volumeInfo.title}</h2>
            <p>Author:{this.props.volumeInfo.authors[0]}</p>
            <p>Price: </p>
            <p>Description:{this.props.volumeInfo.description}</p>
        </div>
        )
    }
}





export default BookInfo;