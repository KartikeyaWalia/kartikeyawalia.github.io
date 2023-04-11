import React from 'react';
import styled from 'styled-components';
import webpage_logo_image from '../../../Assets/Images/Logo/KW_logo.png';

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  //left: 30px;
  width: 60px;
  height: 60px;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={webpage_logo_image} alt="Kartikeya Walia" />
    </LogoContainer>
  );
};

export default Logo;
