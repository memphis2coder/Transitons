import React from 'react';
import styled from 'styled-components';

function One() {
    const StyledNumber = styled.h1`
        font-size: 350px;
        opacity: 0.4;
        color: lightgray;
        z-index: -10;
        @media (max-width: 768px) {
            font-size: 250px;
        }
    `

    return(
        <div>
            <StyledNumber>
                01
            </StyledNumber>
        </div>
    )
};

export default One;