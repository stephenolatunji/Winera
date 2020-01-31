import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home/Home'
import Classic from '../Components/Classic';



const Wine = () => {
    return(
        <div>
            <Header />
            <Home />
            <Classic />
        </div>
    )
};
export default Wine;