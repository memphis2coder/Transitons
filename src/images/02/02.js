import React from 'react';
import styled from 'styled-components';

function Two() {
    const StyledNumber = styled.h1`
        font-size: 350px;
        opacity: 0.1;
        color: black;
        /* z-index: 10; */
        @media (max-width: 768px) {
            font-size: 250px;
        }
    `

    return(
        <div>
            <StyledNumber>
                02
            </StyledNumber>
        </div>
    )
};

export default Two;