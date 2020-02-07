import React, { Component } from 'react';

class Vodka extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        };
    };

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
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

                            <div className='col-sm-3' key={i}>
                                <img src={drinks.strDrinkThumb} alt='Alcohol' />
                                <h3>{drinks.strDrink}</h3>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
};
export default Vodka