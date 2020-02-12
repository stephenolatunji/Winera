import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class Search extends Component {
    constructor(){
        super();
        this.state = {
            url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`,
            query: '',
            results:[]
        };
        this.searchCockTail = this.searchCockTail.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    searchCockTail = (searchquery) => {
        let url = this.state.url + searchquery;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ ...this.state, results: data.drinks })
            })
            .catch(err => {
                console.log(err);

            })
    };

    changeHandler = (e) => {
        this.setState({ ...this.state, query: e.target.value })
    };


    submitHandler = (e) => {
        console.log(this.results);
        e.preventDefault()
        this.searchCockTail(this.state.query);
    };

    render(){
        return (
            <div>
                <section className='search-section'>
                    <div className='search-area'>
                        <h3>Search from our collection</h3>
                        <form inline onSubmit={this.submitHandler}>
                            <input placeholder='Enter name of Cocktail' className='mb-2' onChange={this.changeHandler} />
                            <button type='submit' className='btn btn-danger'>Search</button>
                        </form>
                        <h5>Search By Category</h5>
                        <ul>
                            <li>
                                <Link to='/alcoholic'>Alcoholic</Link>
                            </li>
                            <li>
                                <Link to='/nonalcoholic'>Non Alcoholic</Link>
                            </li>
                            <li>
                                <Link to='/cocktail'>Cocktail</Link>
                            </li>
                            <li>
                                <Link to='/ordinarydrink'>Ordinary Drinks</Link>
                            </li>
                            <li>
                                <Link to='/vodka'>Vodka</Link>
                            </li>
                            <li>
                                <Link to='/gin'>Gin</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className='container'>
                    <div className='row'>
                        {this.state.results.map((drinks, i) => {
                            return (
                                <div className='col-sm-3' key={i} id='alcohol'>
                                    <img src={drinks.strDrinkThumb} alt='cocktail' />
                                    <h3>{drinks.strDrink}</h3>
                                    <p>{drinks.strIngredient1}, {drinks.strIngredient2}, {drinks.strIngredient3}, {drinks.strIngredient4}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    
};
export default Search;