import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

import HomePage from '../../Pages/home';
import SecondPage from '../../Pages/secondPage';
import ThirdPage from '../../Pages/thirdPage';

import {AnimatePresence} from 'framer-motion';

function Navibar() {
    return (
        <div>
            <Navbar expand="lg" bg="white">
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
                            <Nav.Link as={Link} to="/thirdPage">
                                <span className='link'>
                                    Page3
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <AnimatePresence>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/secondPage' component={SecondPage} />
                        <Route path='/thirdPage' component={ThirdPage} />
                    </Switch>
                </AnimatePresence>
            </div>
        </div>
    )
};

export default Navibar;