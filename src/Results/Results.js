import React from 'react'
import BookInfo from './BookInfo/BookInfo';

class Results extends React.Component {
    render(){
        return(
            <div className='results-container'>
                <BookInfo />
            </div>
        )
    }
}

export default Results