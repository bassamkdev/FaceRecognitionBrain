import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
   apiKey: '38ade7a7923241178a966c385cd9d1b8'
});
const particleOptions = {
  particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }         
      }
   }
 }
class App extends Component {
  constructor () {
    super();
    this.state = {
      input : '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render () {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
             {/* <FaceRecognition/>*/}
       </div>
    );
  }
}

export default App;
