import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../../../../Assets/Images/CRISP/logo.png';
import design from '../../../../Assets/Images/CRISP/design.png';
import prototype_des from '../../../../Assets/Images/CRISP/prototype.png';


const Logo = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 26}%) scale(0.225)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-180vh;
transform-origin: right center
right:5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Prototype_des = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 18}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-190vh;
transform-origin: right center
right:45vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Design = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.35)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-90vh;
transform-origin: right center
right:18vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(2px);
`;



class CRISP extends Component {
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
        
               
        <Design src={design} scroll={scrollPercent} alt="design" /> {/* this decides who comes on top, last one is topmost*/}  
        <Prototype_des src={prototype_des} scroll={scrollPercent} alt="prototype" />       
        <Logo src={logo} scroll={scrollPercent} alt="logo" />
        
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

CRISP.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CRISP;
