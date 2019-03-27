import React from 'react'
import './FilterOptions.css'

class FilterOptions extends React.Component {
    render(){
        return(
            <div className='filter-options-container'>
                <form>
                    <label className='print-type-label'>Print Type:</label>
                        <select name='print-type' className='print-type'>
                            <option value='All'>All</option>
                        </select>
                    <label className='book-type-label'>Book Type:</label>
                        <select name='book-type' className='book-type'>
                            <option value='No Filter'>No Filter</option>
                        </select>
                </form>
            </div>
        )
    }
}

export default FilterOptions