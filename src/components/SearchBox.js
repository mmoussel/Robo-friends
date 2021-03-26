import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className='ma3'>
            <input
                className='tc pa3 ba b--pink bg-lightest-pink'
                type='search'
                placeholder='Search Robots'
                onChange={(data) => searchChange(data)}
            // onChange={(event) => console.log(event)}
            />
        </div>
    )
}
export default SearchBox;