import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import scan from '../../../../Assets/Images/Prosthetic/scan.png';
import prosthetic_design from '../../../../Assets/Images/Prosthetic/prosthetic_design.png';



const Prosthetic_Design = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(1.1)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-30vh;
right:20vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Scan = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(1)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-40vh;
right:10vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(1.5px);
`;




class Prosthetic extends Component {
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
        <Scan src={scan} scroll={scrollPercent} alt="3D_Scan" /> {/* this decides who comes on top, last one is topmost*/}  
        <Prosthetic_Design src={prosthetic_design} scroll={scrollPercent} alt="Prosthetic_Design" />        
              
        
        
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

Prosthetic.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default Prosthetic;
