import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FacesDetected from './components/FacesDetected/FacesDetected';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'API_KEY'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      },
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      boxes: []
    }
  }

  calculateFaceLocations = (apiData) => {
    const regions = apiData.outputs[0].data.regions;
    if (regions === undefined) {
      // no faces found
      return [];
    }

    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    const faceLocations = regions.map(region => {
      const box = region.region_info.bounding_box;
      return {
        // calculate distance to borders of the image
        top: box.top_row * height,
        left: box.left_col * width,
        bottom: height - (box.bottom_row * height),
        right: width - (box.right_col * width)
      };
    });
    return faceLocations;
  }

  displayFaceBox = (boxes) => {
    console.log(boxes.length);
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response =>
      this.displayFaceBox(this.calculateFaceLocations(response)))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
        <FacesDetected numFaces={this.state.boxes.length}/>
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl}/>
     </div>
    );
  }
}
export default App;