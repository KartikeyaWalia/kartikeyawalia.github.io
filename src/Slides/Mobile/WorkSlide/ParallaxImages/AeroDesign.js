import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import final_plane from '../../../../Assets/Images/AeroDesign/final_plane.png';
import planes from '../../../../Assets/Images/AeroDesign/planes.png';
import plane_analysis from '../../../../Assets/Images/AeroDesign/plane_analysis.png';
import plane_drawing from '../../../../Assets/Images/AeroDesign/plane_drawing.png';
import flying from '../../../../Assets/Images/AeroDesign/flyhigh.png';

const PlaneDrawing = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.35)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-190vh;
transform-origin: right center
right:6vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(1.5px);
`;
const Planes = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 16}%) scale(0.3)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-178vh;
transform-origin: right center
right:5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const FinalPlane = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.2)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-135vh;
transform-origin: right center
right:45vw;  
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const PlaneAnalysis = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-175vh;
transform-origin: right center
right:2vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const Flying = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 20}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-140vh;
transform-origin: right center
right:60vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;


class AeroDesign extends Component {
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
        <PlaneDrawing src={plane_drawing} scroll={scrollPercent} alt="aero_drawing" /> {/* this sequence decides who comes on top, last one is topmost*/}        
        <PlaneAnalysis src={plane_analysis} scroll={scrollPercent} alt="aero_analysis" />        
        
        <Flying src={flying} scroll={scrollPercent} alt="flight_test" />
        <FinalPlane src={final_plane} scroll={scrollPercent} alt="final_prototype" />
        <Planes src={planes} scroll={scrollPercent} alt="iterations" />
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

AeroDesign.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default AeroDesign;
