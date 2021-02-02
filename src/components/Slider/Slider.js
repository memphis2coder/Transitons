import React from 'react';
import { Frame } from 'framer'

function Slide() {
    return (
        <Frame
            name={'Rail'}
            width={130}
            height={6}
            center
            radius={3}
            background={'rgba(255,255,255,.2)'}
        >
            <Frame
                name={'Fill'}
                width={65}
                height={6}
                radius={3}
                background={'#fff'}
            />
            {/* create the ball */}
            <Frame
                name={'Knob'}
                size={40}
                center={'y'}
                radius={'50%'}
                background={'#fff'}
                shadow={"0 2px 8px 1px #242424"}
                left={-20}
            />
        </Frame>
    )
}

export default Slide;
