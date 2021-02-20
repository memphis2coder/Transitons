import React, { useEffect } from 'react'
//Motion
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
//Styles
import './section2.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Section2() {

    const controls = useAnimation();
    const { ref, inView } = useInView();


    const scaleVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1
        }
    };

    const titleVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    };



    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])


    return (
        <div id="section2">
            <Container>
                <Row>
                    <Col sm={12} md={7} className="section2-col1 d-flex flex-column justify-content-center ">
                        <motion.h2
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={titleVariants}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-left pb-4 section-title">
                            <strong><span className="stroke">TECHNOLOGY &</span> <br />MARKETING <br />BECOME ONE.</strong>
                        </motion.h2>
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-left pt-4" ><strong>EXCITING WEBSITES</strong></motion.h4>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="section-text text-left pt-2">
                            Aesthetics, visual perfection, and excellent style are the emotional pieces, that will make one's heart beat faster and pay more. The same is with websites. If you want to achieve your customers and make them loyal—give them emotions, which they need. It will keep users scrolling and getting engaged.
                        </motion.p>
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="text-left pt-4" ><strong>VISUAL BRAND</strong></motion.h4>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="section-text text-left pt-2">
                            What is the main problem with branding? It often happens, that everything is nice and fashionable, but absolutely impossible to use. That is why the first thing we pay attention to is how the visual ideas we bring will work for a particular brand.
                        </motion.p>
                    </Col>
                    <Col sm={12} md={5} className="section2-col2">
                        col-2
                    </Col>
                </Row>
            </Container>
        </div>
    )
}