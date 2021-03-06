import React from 'react';
//Motion
import {motion} from 'framer-motion';
//Styles
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ThirdPage() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <motion.div 
                            exit={{opacity: 0}}
                            animate={{opacity: 1}}
                            initial={{opacity: 0}}    
                        >
                            <h1>Third Page</h1>
                            <motion.p
                                initial={{opacity: 0, y:20}}
                                animate={{ opacity: 1, y:0 }}
                                transition={{duration: 1}}
                            >
                                Lets animate transistions between react router routes with framer motion
                            </motion.p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ThirdPage;