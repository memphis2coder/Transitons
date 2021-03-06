import React, { useEffect } from "react";
//Motion
import { motion, useAnimation} from "framer-motion";
import {Frame} from 'framer';
import { useInView } from "react-intersection-observer";
//Styles
import "./section2.css";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
//Images
import Marketing1 from '../../images/tech&market/marketing1.jpg';
import Marketing2 from '../../images/tech&market/marketing2.jpg';
import Marketing3 from '../../images/tech&market/marketing3.jpg';
import One from '../../images/01/01';



export default function Section2() {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    const pictureVariants = {
        hidden: {scale: 0},
        visible: {scale: 1},
    };

    useEffect(() => { 
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div>
            <Container id="section2">
                <Row>
                    <Col
                        sm={12}
                        md={6}
                        className="section2-col1"
                    >
                        <motion.h2
                            variants={titleVariants}
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-left pb-4 section-title"
                        >
                            <strong>
                                <span className="stroke">TECHNOLOGY &</span> <br />
                                MARKETING <br />
                                BECOME ONE.
                            </strong>
                        </motion.h2>
                        <motion.h4
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={titleVariants}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-left pt-4 section-sub-title"
                        >
                            <strong>EXCITING WEBSITES</strong>
                        </motion.h4>
                        <motion.p
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={titleVariants}
                            
                            transition={{ duration: 1, delay: 0.8 }}
                            className="section-text text-left pt-2 width-75"
                        >
                            Aesthetics, visual perfection, and excellent style are the
                            emotional pieces, that will make one's heart beat faster and pay
                            more. The same is with websites. If you want to achieve your
                            customers and make them loyal—give them emotions, which they need.
                            It will keep users scrolling and getting engaged.
                        </motion.p>
                    </Col>
                    
                    <Col sm={12} md={6} className="section2-col2"> {/** second column */  }
                        <Row>
                            <motion.div 
                                ref={ref}
                                variants={pictureVariants}
                                // animate={controls}
                                animate={controls}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <Image src={Marketing3} className="section2-col2-image" fluid/>
                            </motion.div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
