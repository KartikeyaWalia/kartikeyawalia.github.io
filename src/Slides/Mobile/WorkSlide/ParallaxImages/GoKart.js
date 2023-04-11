import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gk from '../../../../Assets/Images/GoKart/gk.png';
import gk_chassisanalysis from '../../../../Assets/Images/GoKart/gk_chasisanalysis.png';
import chassis from '../../../../Assets/Images/GoKart/gk_chassis.png';
import gk_design from '../../../../Assets/Images/GoKart/gk_design.png';


const GKDesign = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.2)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-150vh;
transform-origin: right center
right:13vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const ChassisAnalysis = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 18}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-150vh;
transform-origin: right center
right:45vw;  
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const Chassis = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) *20}%) scale(0.2)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-130vh;
transform-origin: right center
right:15vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(1px);
`;

const GK = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 16}%) scale(0.23)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-165vh;
transform-origin: right center
right:30vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;



class GoKart extends Component {
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
        
        <Chassis src={chassis} scroll={scrollPercent} alt="chassis_design" />  
             
        <ChassisAnalysis src={gk_chassisanalysis} scroll={scrollPercent} alt="chassis_analysis" /> {/* this decides who comes on top, last one is topmost*/}        
        <GKDesign src={gk_design} scroll={scrollPercent} alt="go_kart_design" /> 
        
        <GK src={gk} scroll={scrollPercent} alt="go_kart_prototype" />
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

GoKart.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default GoKart;
