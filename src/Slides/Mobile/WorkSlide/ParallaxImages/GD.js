import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mesh from '../../../../Assets/Images/GD/mesh.png';
import modes from '../../../../Assets/Images/GD/modes.gif';
import outcomes from '../../../../Assets/Images/GD/outcomes.png';
import tube from '../../../../Assets/Images/GD/tube.png';

const Outcomes = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-130vh;
transform-origin: right center
right:5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(2px);
`;

const Modes = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.3)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-180vh;
transform-origin: right center
right:45vw;  
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const Mesh = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 17}%) scale(0.25)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-120vh;
transform-origin: right center
right:40vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.2px);
`;

const Tube = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-220vh;
transform-origin: right center
right:-5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;


class GD extends Component {
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
        
        <Outcomes src={outcomes} scroll={scrollPercent} alt="GD_Outcomes" />        
        <Mesh src={mesh} scroll={scrollPercent} alt="mesh" /> {/* this decides who comes on top, last one is topmost*/}        
        <Modes src={modes} scroll={scrollPercent} alt="vibration_modes" />
        <Tube src={tube} scroll={scrollPercent} alt="GD_tube" />
        
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

GD.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default GD;
