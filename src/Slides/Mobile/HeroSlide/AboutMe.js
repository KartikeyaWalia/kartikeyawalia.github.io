import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 50vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const AboutMeDescription = styled.span`
  font-family: 'AvenirRoman';
  font-size: 24px;
  text-align: center;
  @media ${device.mobileS} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 24px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 40px;
  }
  @media ${device.laptop} {
    padding: 90px;
    font-size: 45px;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutMeDescription>
        Hi there! I'm a CAD designer and roboticist with a keen interest in sustainable design. 
        I'm particularly excited about Additive Manufacturing and Generative Design, as I truly 
        believe they have the potential to revolutionize the way we create products that are both 
        efficient and environmentally responsible. Oh, and when I'm not geeking out over design, 
        you can probably find me flying drones!
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
