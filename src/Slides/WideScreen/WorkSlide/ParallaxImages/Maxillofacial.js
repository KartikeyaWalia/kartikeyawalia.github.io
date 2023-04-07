import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mandible_plate from '../../../../Assets/Images/Maxillofacial/mandible_plate.png';
import maxi_study_setup from '../../../../Assets/Images/Maxillofacial/maxi_study_setup.png';
import maxi_analysis from '../../../../Assets/Images/Maxillofacial/maxi_analysis.png';


const MandiblePlate = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) *12}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-40vh;
right:10vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;

const MaxiAnalysis = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(1)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-20vh;
right:2vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
//filter: blur(0.0px);
`;

const MaxiStudySetup = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) *7}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-60vh;
right:3vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;



class Maxillofacial extends Component {
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
        
                
        <MaxiAnalysis src={maxi_analysis} scroll={scrollPercent} alt="maxi_analysis" /> {/* this decides who comes on top, last one is topmost*/}        
        <MaxiStudySetup src={maxi_study_setup} scroll={scrollPercent} alt="maxi_study_setup" />
        <MandiblePlate src={mandible_plate} scroll={scrollPercent} alt="mandible_plate" />
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

Maxillofacial.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default Maxillofacial;
