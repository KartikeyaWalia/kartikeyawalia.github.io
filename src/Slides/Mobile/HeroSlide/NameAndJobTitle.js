import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:40vh;
    width:100%;
    background-color: white;
    /*border: 1px solid blue; */
`;

const Name = styled.div`
  font-family: 'CollectionFree';
  text-align:center;
  padding-right: 10px;
  
  @media ${device.mobileS} {
    font-size: 60px;
  }
  @media ${device.mobileM} {
    font-size: 70px;
  }
  @media ${device.mobileL} {
    font-size: 80px;
  }
  @media ${device.tablet} {
    font-size: 140px;
  }
  @media ${device.laptop} {
    font-size: 150px;
  }
`;

const Title = styled.div`
  font-family: 'AvenirRoman';
  text-align:center;
  margin-top: 10px;
  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Name>Kartikeya Walia</Name>
        <Title>CAD Design | 3D Printing | Robotics</Title>
      </Container>
    );
  }
}

export default NameAndJobTitle;
