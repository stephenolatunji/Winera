import React, { Component } from 'react';

class NonAlcoholic extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        };
    };

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(res => res.json())
            .then(data => {
                this.setState({ results: data.drinks.slice(50, 70) })
            })
    }



    render() {
        return (
            <div className='container'>
                <div className='row' >
                    {this.state.results.map((drinks, i) => {
                        return (
                            <div className='col-sm-3' key={i} id='alcohol'>
                                <img src={drinks.strDrinkThumb} alt='NonAlcoholic Drinks' />
                                <h3>{drinks.strDrink}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};
export default NonAlcoholic;