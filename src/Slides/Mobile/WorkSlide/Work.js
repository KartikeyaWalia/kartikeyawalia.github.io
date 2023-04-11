import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /*border: 2px dashed red;*/
    width: 100%;
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'Old Delhi Diorama ',
        projectDesc: 'This involved 3D modelling the historical monuments and the landscape of Old Delhi with all the intricate details at a 1:100 scale using the data from Archaeological Survey of India (ASI). The diorama will be installed in the Humayun\'s Tomb Site Museum, India. ',
        projectType: '3D Cityscape',
        roles: ['CAD', '3D Printing', 'Model Making'],
      },
      {
        number: '02',
        projectName: 'C.R.I.S.P',
        projectDesc: 'A modular robotic system manufactured using 3D Printed standard components. The main focus of the project involved making it low-cost, re-configurable and reusable.',
        projectType: 'Manipulator Robotics',
        roles: ['Hardware Design', 'Prototyping', 'Back-end Software'],
      },
      {
        number: '03',
        projectName: 'Spherical Parallel Manipulator',
        projectDesc: 'A 3 Degree-of-Freedom serial parallel manipulator was developed which acts as a constant-velocity joint and can be integrated into serial manipulator arms for increasing the manipulability.',
        projectType: 'Spherical Wrist',
        roles: ['Hardware Design', 'Prototyping', 'Back-end Software'],
      },
      {
        number: '04',
        projectName: 'Modal Analysis of Generative Designs',
        projectDesc: 'Upon conducting dynamic analysis of generative designs, it has been observed that these designs possess a significant potential for providing dampening effects. Such effects can be immensely beneficial for improving the structural life of a design.',
        projectType: 'Generative Design',
        roles: ['CAD','FEA'],
      },
      {
        number: '05',
        projectName: 'Craniofacial Implant',
        projectDesc: 'To relieve intracranial pressure and save patient inflicted with severe head injury, neurosurgeons restore cranial defects. This project involved development of a more accurate patient-specific template saving crucial surgery time',
        projectType: 'Cranial Defect Restoration',
        roles: ['Reverse-Engineering', 'AM Prototyping'],
      },
      {
        number: '06',
        projectName: 'Titanium-Graphene Mandible Plate',
        projectDesc: 'Improving the endurance life of a titanium plate by using minor composisitons of Graphene Nanoplatelets (GNPs) for reducing stress concentrations at critical sections of the plate.',
        projectType: 'Maxillofacial',
        roles: ['FEM','FEA'],
      },
      {
        number: '07',
        projectName: 'Animal Prosthetic',
        projectDesc: 'Development and manufacturing of a prosthetic for an amputated dog.',
        projectType: 'Prosthesis',
        roles: ['3D Scanning', 'CAD', 'Prototyping'],
      },
      {
        number: '08',
        projectName: 'Autonomous Driving Simulator',
        projectDesc: 'This involved the development of an autonomous driving simulator to study the variables affecting the driver discomfort during a commute in a vehicle.',
        projectType: 'Ergonomics',
        roles: ['Rig-development', 'Simulation', 'Statistical Analysis'],
      },
      {
        number: '09',
        projectName: 'Team Torque: Go Kart',
        projectDesc: 'Manufactured a go-kart with a water-cooled engine to increase efficiency and performance. Raced in International Series of Karting, 2016 and Trinity Karting Tropy, 2016.',
        projectType: 'Automotive',
        roles: ['Manufacturing', 'FEA', 'CAD'],
      },
      {
        number: '10',
        projectName: 'Team Tachyons: Aero Design (SAEIndia)',
        projectDesc: 'Designed and developed a micro-class fully operational aircraft and participated in Manovegam, 2017',
        projectType: 'Aircraft',
        roles: ['Manufacturing', 'FEA', 'CAD'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
