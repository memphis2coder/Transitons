import React from 'react'
//Styles
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './border.css';
//Motion
import { motion } from "framer-motion"

export default function Border() {
    return (
        <section id="border">
            <Container>
                <motion.div 
                    className="border-container"
                    initial={{width: "0"}}
                    animate={{width: '100%'}}
                    transition={{duration: 1}}   
                >

                </motion.div>
                <div>
                        hello world
                    </div>
            </Container>
        </section>
    )
};


