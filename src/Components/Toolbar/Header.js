import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';


class Header extends Component {
    render(){

        return(
            <AppBar
                position='fixed'
                style={{
                backgroundColor:'black',
                padding:'30px, 0',
                }}>
                <Toolbar>
                    <div className='header_logo'>
                        <div className='header_logo_venue'>
                            <h1 className='logo'>WinERA</h1>
                        </div>
                        <div className='header_logo'>
                            <h4 className='sub-title'>A one stop online cellar for wine enthusiasts</h4>
                        </div>
                    </div>
                    <IconButton>
                        <Menu style={{ color: 'orange', float: 'right'}} />
                    </IconButton>
                    {/* <SideDrawer
                    closeDrawer={this.state.drawerOpen}
                    /> */}
                </Toolbar>  
            </AppBar>
        )
        
    }
}
export default Header;