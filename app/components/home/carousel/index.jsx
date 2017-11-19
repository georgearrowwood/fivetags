import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap/lib';

import './carousel.scss';
import Slide1 from './slide1';

class Carousell extends Component {
  constructor() {
    super();
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.state = {
      animate: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: 'animate-obj',
      });
    }, 10);
  }

  onChangeSlider() {
    this.setState({
      animate: '',
    });
    setTimeout(() => {
      this.setState({
        animate: 'animate-obj',
      });
    }, 500);
  }

  render() {
    return (
      <div className={this.state.animate}>
        <Carousel onSelect={this.onChangeSlider}>
          <Carousel.Item>
            <Slide1 />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousell;

