import React from 'react';
import styled from 'styled-components';

function Logo() {
    const Logo = styled.h1`
        font-size: 2rem;
        background-color: blue;
        padding: 5px 15px;
        color: white;
        border-radius: 10px;
    `
    return (
        <div>
            <Logo>B</Logo>
        </div>
    )
};

export default Logo;