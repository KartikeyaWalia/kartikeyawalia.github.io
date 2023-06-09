import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import skull from '../../../../Assets/Images/Craniofacial/skull.png';
import surgery from '../../../../Assets/Images/Craniofacial/surgery.png';


const Skull = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:10vh;
right:15vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Surgery = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 11}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-90vh;
right:-5vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(1.5px);
`;




class Craniofacial extends Component {
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
        
        <Surgery src={surgery} scroll={scrollPercent} alt="surgery" />        
        <Skull src={skull} scroll={scrollPercent} alt="skull_template" /> {/* this decides who comes on top, last one is topmost*/}        
        
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

Craniofacial.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default Craniofacial;
