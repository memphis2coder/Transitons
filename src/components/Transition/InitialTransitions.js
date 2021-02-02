import React from 'react';
import Frame from 'framer';

export function Circle() {
    return (
        <Frame
            name={'SliderApp'}
            width={'100%'}
            height={'100%'}
            background={'grey'}
        >
        <Frame
            center
            image={"https://static.framer.com/api/logo.jpg"}
            radius={4}
        />
        </Frame>
    )
}