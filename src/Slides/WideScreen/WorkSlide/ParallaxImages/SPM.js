import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import spm_proto from '../../../../Assets/Images/SPM/spm_proto.png';
import spm_des from '../../../../Assets/Images/SPM/spm_des.png';



const SPM_Design = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-60vh;
right:-10vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(2px);
`;

const Spm_Proto = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:0vh;
right:25vw; 
position: absolute;
/*border: 1px dashed red;*/
height: 80vh;
filter: blur(0.0px);
`;




class SPM extends Component {
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
        
        <SPM_Design src={spm_des} scroll={scrollPercent} alt="design" />        
        <Spm_Proto src={spm_proto} scroll={scrollPercent} alt="prototype" /> {/* this decides who comes on top, last one is topmost*/}        
              
        
        {/*<Drawing src={drawing} scroll={scrollPercent} alt="drawing_example" />*/}
      </React.Fragment>
    );
  }
}

SPM.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default SPM;
