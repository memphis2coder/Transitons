import React from 'react';
import { Frame, useMotionValue, useTransform } from 'framer'

function Slide({
    min=0,
    max=1,
    value=0,
    onChange
}) {
    const position = useMotionValue(value * 130);
    const newValue = useTransform(position,[0,130],[min,max])
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
                width={position}
                height={6}
                radius={3}
                background={'#fff'}
            />
            {/* create the ball */}
            <Frame
                name={'Knob'}
                x={position}
                size={40}
                center={'y'}
                radius={'50%'}
                background={'#fff'}
                shadow={"0 2px 8px 1px #242424"}
                left={-20}
                drag={'x'}
                dragConstraints={{left:0, right:130}}
                dragElastic={0}
                dragMomentum={false}
                onDrag={function(){
                    if (onChange) onChange(newValue.get())
                }}
            />
        </Frame>
    )
}

export default Slide;
