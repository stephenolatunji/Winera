import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home'
import Footer from './Footer';
import Alcoholic from '../Pages/Alcoholic';
import NonAlcoholic from '../Pages/NonAlcoholic';
import Vodka from '../Pages/Vodka';
import { BrowserRouter as Router, Route } from 'react-router-dom'



const Wine = () => {
    return(
        <div>
            <Header />
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/alcoholic' component={Alcoholic} />
                <Route path='/nonalcoholic' component={NonAlcoholic} />
                <Route path='/alcoholic' component={Vodka} />
            </Router>
            
            <Footer />
            
        </div>
    )
};
export default Wine;