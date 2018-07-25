import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
    public render() {
        return (
        <Navbar>
            <NavbarBrand href="#">Emacs Theme Editor</NavbarBrand>
        </Navbar>
        );
    }
}

export default Header;