import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

import HomePage from '../../Pages/home';
import SecondPage from '../../Pages/secondPage';

function Navibar() {
    return (
        <div>
            <Navbar bg="none" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <span className="brandLogo">Transitions</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/secondPage">
                                <span className='link'>
                                    Page2
                                </span>    
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <span className='link'>
                                    LINK
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/secondPage' component={SecondPage} />
                </Switch>
            </div>
        </div>
    )
};

export default Navibar;