import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'

class Navigation extends Component {
    render() { 
        const { theme } = this.props.state;
        console.log(theme);
        const color = theme ? theme.toLowerCase() : 'secondary';

        return (
            <div>
                <Navbar className={`bg-${color}`} light expand="md">
                    <NavbarBrand>Leaflet Map Theme</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}
 
export default Navigation;
