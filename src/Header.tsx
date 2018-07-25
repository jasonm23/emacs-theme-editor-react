import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

interface IHeaderProps {
    title: string,
}

class Header extends React.Component<IHeaderProps, {}> {
    public render() {
        return (
            <Navbar>
                <NavbarBrand href="#">{this.props.title}</NavbarBrand>
            </Navbar>
        );
    }
}

export default Header;