import React, { useEffect } from 'react';
//Motion
import { motion , useAnimation } from "framer-motion"
//Styles
import "../App.css";
import Fade from 'react-reveal/Fade';
import {useInView} from 'react-intersection-observer';

//Components
import Jumbo from '../components/Jumbotron/jumbo';
import Section2 from '../components/Section2/section2';
import Section3 from '../components/Section3/section3';

function HomePage() {
    const controls = useAnimation();
    const {ref, inView} = useInView();

    const boxVariants = {
        hidden: {opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
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
        <div>
            {/* <Jumbo/> */}
            {/** Fade = reveal on scroll style */}
                {/* <Fade bottom>
                    <Section2/>
                </Fade> */}
                <motion.div
                    className="box"  
                    ref={ref} 
                    initial="hidden" 
                    animate={controls} 
                    variants={boxVariants}>
                    {/* <Section2/>
                    <Section3/> */}
                </motion.div>
                
        </div>
    )
};

export default HomePage;

