import React, { useState } from 'react';
//Motion
import { motion } from "framer-motion"
//Styles
import Fade from 'react-reveal/Fade'
// import './home.css';
// import styled from 'styled-components'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Jumbotron from 'react-bootstrap/Jumbotron';
//Components
import Jumbo from '../components/Jumbotron/jumbo';
import Border from '../components/Border/border';

function HomePage() {
    return (
        <div>
            <Jumbo/>
                <Fade bottom>
                    <Border/>
                </Fade>
        </div>
    )
};

export default HomePage;

