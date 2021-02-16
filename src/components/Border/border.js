import React from 'react'
//Styles
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './border.css';
import styled from 'styled-components';
//Motion
import { motion } from "framer-motion"
//Images
import techPic from '../../images/tech&market/tech&mark.jpg';
import Two from '../../images/02/02';
//Style
import './border.css';

export default function Border() {
    const PositionRight = styled.div `
        position: absolute;
        top: -200px;
        right: -50px;
        z-index: -10;
        @media (max-width: 768px) {
            right: 0px;
            top: 120px;
        }
    `
    return (
        <section id="border">
            <Container>
                <motion.div 
                    className="border-container"
                    initial={{width: "0"}}
                    animate={{width: '100%'}}
                    transition={{duration: 1}}   
                >
                {/** Everything will be inside this border-container */}
                    <Col>
                        <Row>
                            <PositionRight>
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1.3 }}
                                >
                                    <Two />
                                </motion.div>
                            </PositionRight>
                        </Row>
                        {/** first row */}
                        <Row>
                            <Col>
                                {/* <span>
                                    <h2>TECHNOLOGY & MARKETING BECOME ONE.</h2>
                                </span> */}
                                <div className="image-container">
                                    <Image src={techPic} alt="pic" fluid/>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h4>01. DISCUSS</h4>
                                        <p>lorem10</p>
                                    </Col>
                                    <Col>
                                        <h4>02. RESEARCH</h4>
                                        <p>lorem10</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>03. CONCEPT</h4>
                                        <p>lorem10</p>
                                    </Col>
                                    <Col>
                                        <h4>04. IMPLEMENTATION</h4>
                                        <p>lorem10</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* * second row
                        <Row>
                            <Col>col 1</Col>
                            <Col>col 2</Col>
                        </Row>
                        {/** third row */}
                        {/* <Row>
                            <Col>col 1</Col>
                            <Col>col 2</Col>
                        </Row> */} 
                    </Col>

                </motion.div>
            </Container>
        </section>
    )
};


