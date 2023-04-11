import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 50vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /*border: 1px solid blue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: normal;
    align-items: center;
    padding: 2em;
`;

const AboutMeTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #000;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const AboutMeDescription = styled.span`
  font-family: 'AvenirRoman';
  font-size: 24px;
  text-align: justify;
  @media ${device.mobileS} {
    padding: 30px;
    font-size: 15px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 18px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 19px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 35px;
  }
  @media ${device.laptop} {
    padding: 90px;
    font-size: 40px;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutMeTitle>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
          <div>
          Hi there! I'm a CAD designer and roboticist with a keen interest in sustainable design. 
          I'm particularly excited about Additive Manufacturing and Generative Design, as I truly 
          believe they have the potential to revolutionize the way we create products that are both 
          efficient and environmentally responsible. Oh, and when I'm not geeking out over design, 
          you can probably find me flying drones!
          </div>          
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
