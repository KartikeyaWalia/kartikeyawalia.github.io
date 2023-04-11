import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vhCheck from 'vh-check';
import OldDelhiDiorama from './ParallaxImages/OldDelhiDiorama';
import CRISP from './ParallaxImages/CRISP';
import SPM from './ParallaxImages/SPM';
import GD from './ParallaxImages/GD';
import Craniofacial from './ParallaxImages/Craniofacial';
import Maxillofacial from './ParallaxImages/Maxillofacial';
import Prosthetic from './ParallaxImages/Prosthetic';
import AutoDriving from './ParallaxImages/AutoDriving';
import GoKart from './ParallaxImages/GoKart';
import AeroDesign from './ParallaxImages/AeroDesign';

const ImageContainer = styled.div`
/*border: 2px dashed green;*/
width:100%;
height:1450vh; /*this controls the total height, uff*/
margin-bottom:30vh;
display: flex;
flex-flow: column nowrap;

`;

const ImageBox = styled.div`
/*outline: 0.1px dashed green; */
margin-top:30vh;
height: 100vh;
position: relative;
`;

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const vhDiff = vhCheck().offset;
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState(
      { screenHeight: Math.round(window.document.documentElement.clientHeight + vhDiff) },
    );
    console.log('scrollHeight', Math.round(window.document.documentElement.scrollHeight));
    console.log('screenHeight', Math.round(window.document.documentElement.clientHeight));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 2040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent, scrollHeight, screenHeight } = this.state;
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    return (
      <ImageContainer>
        <ImageBox height={boxHeight}>
          <OldDelhiDiorama
            boxHeight={boxHeight}
            index={1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <CRISP
            boxHeight={boxHeight}
            index={2}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <SPM
            boxHeight={boxHeight}
            index={3}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <GD
            boxHeight={boxHeight}
            index={4}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <Craniofacial
            boxHeight={boxHeight}
            index={5}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <Maxillofacial
            boxHeight={boxHeight}
            index={6}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <Prosthetic
            boxHeight={boxHeight}
            index={7}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <AutoDriving
            boxHeight={boxHeight}
            index={8}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <GoKart
            boxHeight={boxHeight}
            index={9}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <AeroDesign
            boxHeight={boxHeight}
            index={10}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
