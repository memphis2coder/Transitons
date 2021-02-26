import React, {useEffect} from 'react'
//Motion
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
//Styles
import './section3.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Section3() {
    const controls = useAnimation();
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    //Variants
    const titleSlideUp = {
        hidden: {opacity:0, y: 20},
        visible: {opacity: 1, y: 0},
    }
    const transition = {duration:0.8, ease: [0.6, -0.05, 0.01, 0.9] }   

    return (
        <div id="section3">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={titleSlideUp}
                                transition={transition}
                            >    
                                GREAT PROCESS.    
                            </motion.div>
                        </h2>
                        <p>
                            <motion.div
                            ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={titleSlideUp}
                                transition={transition}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, labore. Dolor, fugiat illum!
                            </motion.div>
                        </p>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Title</h3>
                                <p>texts</p>
                            </Col>
                            <Col>
                                <h3>Title</h3>
                                <p>texts</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Title</h3>
                                <p>texts</p>
                            </Col>
                            <Col>
                                <h3>Title</h3>
                                <p>texts</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
