import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import concept from '../../../../Assets/Images/AutoDriving/concept.png';
import experiments from '../../../../Assets/Images/AutoDriving/experiments.png';
import seat_angle from '../../../../Assets/Images/AutoDriving/seat_angle.png';
import setup_image from '../../../../Assets/Images/AutoDriving/setup_image.png';

const Concept = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-10vh;
right:-12vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Experiments = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-50vh;
right:5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(2px);
`;

const SeatAngle = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-10vh;
right:25vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(1px);
`;

const SetupImage = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-15vh;
right:-2vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

class AutoDriving extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        
        <SetupImage src={setup_image} scroll={scrollPercent} alt="setup_image" />      
        <Experiments src={experiments} scroll={scrollPercent} alt="experiments" /> {/* this decides who comes on top, last one is topmost*/}        
        <SeatAngle src={seat_angle} scroll={scrollPercent} alt="seat_angle" />
        
        <Concept src={concept} scroll={scrollPercent} alt="concept" />  
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

AutoDriving.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default AutoDriving;
