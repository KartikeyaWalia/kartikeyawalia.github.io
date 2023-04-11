import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.section`
    margin-top:20vh;
    height: 200vh;
    width:100%;
    /*border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: normal;
    //align-content: flex-start;
    align-items: center;
    padding: 2em;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    }
`;

const SkillsTitle = styled.div`
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

const SkillsList = styled.div`
  font-family: 'AvenirRoman';
  z-index: 1;
  
  @media ${device.mobileS} {
    margin-top: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    margin-top: 35px;
    font-size: 25px;
  }
  @media ${device.tablet} {
    margin-top: 45px;
    font-size: 35px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 45px;
  }
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsList>
        <div>
            CAD (F360, SW and SpaceClaim)  
            <br />
            ⚫⚫⚫⚫⚫
            <br />
            <br />
            FEA (Ansys, HyperMesh and LSDyna)
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            <br />
            Generative Design            
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            <br />
            3D Printing (FDM, SLA, SLS and MJF)
            <br />
            ⚫⚫⚫⚫⚫
            <br />
            <br />
            3D Scanning
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            <br />
            Unity
            <br />
            ⚫⚫⚪⚪⚪
            <br />
            <br />
            MATLAB and Simulink  
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            <br />
            ROS and ROS2
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            <br />
            Python            
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            <br />
            Embedded C
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            <br />
            C/C++
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            <br />
            HTML, CSS and JS
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            <br />          
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
