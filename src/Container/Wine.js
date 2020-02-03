import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home/Home'
import Classic from '../Components/Classic';
import Footer from './Footer';



const Wine = () => {
    return(
        <div>
            <Header />
            <Home />
            <Classic />
            <Footer />
        </div>
    )
};
export default Wine;