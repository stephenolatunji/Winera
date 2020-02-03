import React from 'react';

const Search = () => {
    return(
        <div className='search-area'>
            <h3>Search from our collection</h3>
            <form inline>
                <input placeholder='Enter name of Cocktail' className='mb-2'/>
                <button type='button' className='btn btn-danger'>Search</button>
            </form>
        <h5>Search By Category</h5>
        <ul>
            <li>Alcoholic</li>
            <li>Non Alcoholic</li>
            <li>Cocktail</li>
            <li>Ordinary Drinks</li>
            <li>Vodka</li>
            <li>Gin</li>
        </ul>
        </div>
    )
};
export default Search;