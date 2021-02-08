import React, {useState} from 'react';
import { motion } from "framer-motion"
import styled from 'styled-components'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <motion.div>
                            <h1>Home Page</h1>
                            <p>Lets animate transistions between react router routes with framer motion</p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default HomePage;

