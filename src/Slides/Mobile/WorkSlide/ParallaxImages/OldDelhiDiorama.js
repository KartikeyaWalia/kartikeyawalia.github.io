import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dargah from '../../../../Assets/Images/OldDelhiDiorama/dargah.png';
//import drawing from '../../../../Assets/Images/OldDelhiDiorama/drawing.png';
import fullprint from '../../../../Assets/Images/OldDelhiDiorama/fullprint.png';
import fullprint1 from '../../../../Assets/Images/OldDelhiDiorama/fullprint1.png';
import humayun from '../../../../Assets/Images/OldDelhiDiorama/humayun.png';
import terrain  from '../../../../Assets/Images/OldDelhiDiorama/terrain.png';

const Fullprint = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.25)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-190vh;
transform-origin: right center
right:5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;
/*
const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`, //size chota
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh; //scroll se utna tez daudega jitna negative -100vh max h shayad
right: 2vw; 
/* border: 1px dashed red; 
height: 80vh;
filter: blur(0.6px);
`;
*/

const Fullprint1 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 16}%) scale(0.175)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-180vh;
transform-origin: right center
right:2vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Humayun = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.25)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-160vh;
transform-origin: right center
right:40vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

/*
const Drawing = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; 
height: 80vh;
filter: blur(0px);
`;
*/

const Terrain = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 23}%) scale(0.24)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-270vh;
transform-origin: right center
right:5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Dargah = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 21}%) scale(0.25)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-235vh;
transform-origin: right center
right:25vw;  
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

class OldDelhiDiorama extends Component {
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
        <Terrain src={terrain} scroll={scrollPercent} alt="terrain" />
        
        <Dargah src={dargah} scroll={scrollPercent} alt="dargah_complex" />
        <Fullprint1 src={fullprint1} scroll={scrollPercent} alt="diorama1" /> {/* this decides who comes on top, last one is topmost*/}
        
        <Fullprint src={fullprint} scroll={scrollPercent} alt="diorama" />
        <Humayun src={humayun} scroll={scrollPercent} alt="humayuns_tomb" />
        
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

OldDelhiDiorama.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default OldDelhiDiorama;
