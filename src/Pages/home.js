import React, { useState } from 'react';
//Motion
import { motion } from "framer-motion"
//Styles
import './home.css';
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
//Component
import Jumbo from '../components/Jumbotron/jumbo';

function HomePage() {
    return (
        <div>
            <Jumbo/>
        </div>
    )
};

export default HomePage;

