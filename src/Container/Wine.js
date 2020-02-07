import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home'
import Footer from './Footer';
import Search from '../Pages/Search';
import Alcoholic from '../Pages/Alcoholic';



const Wine = () => {
    return(
        <div>
            <Header />
            <Home />
            <Search />
            <Alcoholic />
            <Footer />
            
        </div>
    )
};
export default Wine;