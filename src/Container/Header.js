import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Glass from '../Assets/Glass.jpg';
import { Image } from 'semantic-ui-react';




const Header = () => {
    return(
        <>
            <AppBar
                position='fixed'
                style={{
                    backgroundColor: 'black',
                    padding: '40px, 0',
                }}>
                <Toolbar>

                    <Image src={Glass} avatar alt='wine cup' />
                    <h1 style={{
                        fontFamily: 'cursive',
                        marginTop: '20px 0 0 15px',
                        color: 'rgb(223, 49, 49)'

                    }} >
                        <strong>WinERA</strong>
                    </h1>

                </Toolbar>

            </AppBar>
          
        </>
        
    )
}
export default Header;