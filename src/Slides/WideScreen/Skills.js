import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.div`
    height: 120vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const SkillsTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(-${(scrollPercent) * 11}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:40%;
  right:-50%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SkillsList = styled.div`
  /* border: 1px solid #EFEFEF; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
  @media ${device.laptop} {
    font-size: 35px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 70px;
  }
`;

class Skills extends Component {
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
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 1300) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 2150) / documentElement.scrollHeight;
    //console.log(minlimit,maxlimit,sp)
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }
/*
  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 1400) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }
*/
  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            CAD (F360, SW and SpaceClaim)  
            <br />
            FEA (Ansys, HyperMesh and LSDyna)
            <br />
            Generative Design            
            <br />
            3D Printing (FDM, SLA, SLS and MJF)
            <br />
            3D Scanning
            <br />
            Surface and Organic Modelling
            <br />
            <br />
            MATLAB and Simulink  
            <br />
            ROS and ROS2
            <br />
            Python            
            <br />
            Embedded C
            <br />
            C/C++
            <br />
            HTML, CSS and JS
            <br />
          </div>
          <div>
            ⚫⚫⚫⚫⚫
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            ⚫⚫⚫⚫⚫
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            ⚫⚫⚪⚪⚪
            <br />
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            ⚫⚫⚫⚫⚪
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            ⚫⚫⚫⚪⚪
            <br />
            ⚫⚫⚫⚪⚪
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
