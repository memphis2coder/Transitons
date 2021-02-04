import React, { useState } from 'react';
import './App.css';
import { Frame } from 'framer';
import Navibar from './components/NaviBar/Navbar';
import Slide from './components/Slider/Slider';

function App() {
  const [scale, setScale] = useState(0.5);
  const constraint = (480 * scale - 120) / 2;
  return (
    <div className="App">
      <Navibar />
      <Frame
        name={'SliderApp'}
        width={'100%'}
        height={'100%'}
        background={'#242424'}
      >
        <Frame
          name={'Mask'}
          size={120}
          center
          y={'-100px'}
          overflow={'hidden'}
          radius={'50%'}
        >
          <Frame
            name={'Image'}
            scale={scale}
            center
            size={480}
            image={"https://static.framer.com/api/logo.jpg"}
            drag
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={{
              top: -constraint,
              bottom: constraint,
              left: constraint,
              right: constraint
            }}
          />
        </Frame>
        <Slide
          value={scale}
          min={0.25}
          max={0.75}
          onChange={function (newValue) {
            setScale(newValue)
          }}
        />

      </Frame>
    </div>
  );
}

export default App;
