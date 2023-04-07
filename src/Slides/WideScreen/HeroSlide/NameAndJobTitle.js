import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <NameReveal text="Kartikeya Walia" fontFam="CollectionFree" timeDelay={500} />
        <br />
        <TitleReveal text="CAD Design | 3D Printing | Robotics" fontFam="AvenirRoman" timeDelay={1300} />
      </Container>
    );
  }
}

export default NameAndJobTitle;
