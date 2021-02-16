import React from 'react';
//Motion
import { motion } from "framer-motion"
//Styles
import './jumbo.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
//Image
import Arrow from '../../images/arrow/arrow';
import One from '../../images/01/01';

function Jumbo() {
    const PositionRight = styled.div `
        position: absolute;
        top: 70px;
        right: 250px;
        @media (max-width: 768px) {
            right: 0px;
            top: 120px;
        }
    `

    return(
        <div>
            <Jumbotron fluid className="jumbotron-custom " >
                {/* This is the overlay backgroud image */}
                <PositionRight>
                <motion.div
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.3 }}
                >
                <One />
                </motion.div>
                    
                </PositionRight>
                {/** First Row */}
                <Row>
                    <Col>
                        <motion.div
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        >
                            <Container>
                            <motion.h1 
                                className="jumbotron-title"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Boutique digital agency <br></br>with a impact
                            </motion.h1>
                            </Container>
                        </motion.div>
                    </Col>
                </Row>
                {/* Second Row */}
                <Container>
                    <Row className="jumbotron-second-row">
                        <Col md={5} xs={12}>
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="jumbotron-intro">
                                <strong>We design, build and scale web and mobile apps</strong> with aspiring entrepreneurs, startups and enterprise customers.</motion.p>
                        </Col>
                        <Col md={3} xs={6}>
                            <motion.ul 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                className="jumbotron-list">
                                <li>Technology</li>
                                <li>Marketing</li>
                                <li>Product&Design</li>
                            </motion.ul>
                        </Col>
                        <Col md={3} xs={6}>
                            <motion.ul 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2 }}
                                className="jumbotron-list">
                                <li>Strategic Consulting</li>
                                <li>Business Synergies</li>
                                <li>Fundrising</li>
                            </motion.ul>
                            
                        </Col>
                        {/* <Col md={1} xs={6}>
                            <Arrow/>
                        </Col> */}
                    </Row>
                </Container>
                
            </Jumbotron>
        </div>
    )
};

export default Jumbo;