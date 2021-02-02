import './App.css';
import { Frame } from 'framer';
import Navibar from './components/NaviBar/Navbar';
import Slide from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Frame
        name={'SliderApp'}
        width={'100%'}
        height={'100%'}
        background={'#242424'}
      >
      <Slide/>
        {/* <Frame
          center
          image={"https://static.framer.com/api/logo.jpg"}
          radius={4}
        /> */}
      </Frame>
    </div>
  );
}

export default App;
