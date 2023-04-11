import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import skull from '../../../../Assets/Images/Craniofacial/skull.png';
import surgery from '../../../../Assets/Images/Craniofacial/surgery.png';


const Skull = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 18}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-150vh;
transform-origin: right center
right:25vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const Surgery = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 27}%) scale(0.3)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-235vh;
transform-origin: right center
right:10vw; 
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
