import React from 'react'
import './BookInfo.css'


class BookInfo extends React.Component {
    render(){ 
        return(
            <div className='book-info-container'>
                <img src='' alt='book'/>
                <h2>Book Title</h2>
                <p>Author: </p>
                <p>Price: </p>
                <p>Description</p>
            </div>
        )
    }
}

export default BookInfo