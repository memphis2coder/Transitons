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
        top: -90%;
        left: -50px;
        z-index: 10;
        @media (max-width: 768px) {
            right: 0px;
            top: 120px;
        }
    `
    return (
        <section id="border">
            <Container>
                <div className="border-container">
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
                        <Row className="d-flex justify-content-center align-items-center white-bg">
                            <Col sm={12} md={6}>
                                <h2 className="text-left pb-4 border-title">TECHNOLOGY & MARKETING BECOME ONE.</h2>
                                <p className="text-left" ><strong>Technology has transformed marketing</strong> by making campaigns more personalized and immersive for people.</p>
                            </Col>
                            <Col sm={12} md={6}>
                                <Image src={techPic} alt="pic" className="border-pic rounded" fluid/>
                            </Col>  
                            {/* <Col sm={12} md={4}>
                                <Row>
                                    <Col className="text-left">
                                        <h5>01. DISCUSS</h5>
                                        <p>lorem10</p>

                                        <h5>02. RESEARCH</h5>
                                        <p>lorem10</p>

                                        <h5>02. RESEARCH</h5>
                                        <p>lorem10</p>
                                    </Col>
                                </Row>
                            </Col> */}
                        </Row>
                        {/* <Row>
                            <Col sm={12} md={12}>
                                <div className="image-container">
                                    
                                </div>
                            </Col>
                        </Row>     */}
                    </Col>
                </div>
            </Container>
        </section>
    )
};


