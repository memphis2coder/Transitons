import React, {useState} from 'react';
import {Link, Switch, Route} from 'react-router-dom'
//Styles
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import {AnimatePresence} from 'framer-motion';
//Pages
import HomePage from '../../Pages/home';
import SecondPage from '../../Pages/secondPage';
import ThirdPage from '../../Pages/thirdPage';
//Image
import Logo from '../../images/Logo/logo';
import { Spin as Hamburger } from 'hamburger-react'



function Navibar() {
    // GET A QUOTE ALERT
    function Test() {
        alert("THIS IS ONLY A TEST")
    }
    // Hamburger icon
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <Navbar expand="lg" bg="white" className="py-4">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <span className="brandLogo"><Logo></Logo></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-icon"><Hamburger toggled={isOpen} toggle={setOpen} rounded/></Navbar.Toggle>
                    {/** Menu Links */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
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
                            {/** Call to action */}
                            <Button onClick = {Test}>GET A QUOTE</Button>
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