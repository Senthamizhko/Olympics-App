import React from 'react';
import { Navbar } from 'react-bootstrap';
import Constants from '../constants';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">{Constants.headerTitle}</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;