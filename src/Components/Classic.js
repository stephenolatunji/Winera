import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import Search from '../Pages/Search/Search';
import '../Pages/Home/App.css';

class Classic extends Component {
    constructor(){
        super();
        this.state = {
            url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`,
            query: 'margarita',
            results: []
        }
        this.searchCockTail = this.searchCockTail.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    };

    componentDidMount(){
        this.searchCockTail(this.state.query)
    }

    searchCockTail = (searchquery) => {
        let url = this.state.url + searchquery;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({...this.state, results: data.drinks})
            })
        .catch(err => {
            console.log(err);

        })
    };

    submitHandler = (e) => {
        e.preventDefault()
        this.state.searchCockTail(this.state.query)
    };

    changeHandler = (e) => {
        this.setState({...this.state, query: e.target.value})
    };

    getAlcohol = () => {
        let url = ( {...this.state, url: ''});
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({...this.state, results: data.drinks});
            })
    };

    render(){
        return(
            <div>
                <section>
                    <div className='container'>
                        <h3><strong>Favorite margarita</strong></h3>
                        <div className='row'>
                            {this.state.results.map((drinks, i) => {
                                return (
                                    <div className='col-sm-4'>
                                        <div className='card' key={i}>
                                            <img src={drinks.strDrinkThumb} alt='cocktail' />
                                            <h3>{drinks.strDrink}</h3>
                                            <p>{drinks.strIngredient1}, {drinks.strIngredient2}, {drinks.strIngredient3}, {drinks.strIngredient4}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Divider />
                </section>
                <section className='search-path'>
                    <Search />
                </section>
            </div>
            
        )
    }
};
export default Classic;