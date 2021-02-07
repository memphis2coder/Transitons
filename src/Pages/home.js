import React, {useState} from 'react';
import { motion } from "framer-motion"
import styled from 'styled-components'

function HomePage() {
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `

    const [ySpot, setYSpot] = useState(0);

    return (
        <div>
            <Container>
                <h2>Home page</h2>
                <br></br>
                <button onClick={() => setYSpot(ySpot === 0 ? 100 : 0)}>Do It!</button>
                <br/>
                    <motion.div 
                        style={{width: 200, height:200, background: 'black'}}
                        animate={{y: ySpot}} 
                        drag={true}
                
                    />
            </Container>
        </div>
    )
};

export default HomePage;

