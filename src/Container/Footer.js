import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../Pages/Home/App.css';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    return(
        <section className='footer'>
            <h3>Contact Us</h3>
            <p>Visit Our Social Media Handle for More Suggestions on Cocktail</p>
            <div className='icons'>
                <MailIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
            <div className='h-divider'/>
            <p> © copyright Mckorr @2020</p>
        </section>
    )
};
export default Footer; 