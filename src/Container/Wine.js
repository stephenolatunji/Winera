import React, { Component } from 'react';
import Header from '../Components/Toolbar/Header';
import LandingPage from '../Components/Home/LandingPage';
import SearchPage from './SearchPage';


class Wine extends Component {
    render(){
        return(
            <div>
                <Header />
                <LandingPage />
                <SearchPage />
            </div>
        )
    }
};
export default Wine;