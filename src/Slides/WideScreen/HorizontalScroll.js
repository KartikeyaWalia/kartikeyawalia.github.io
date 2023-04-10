import React from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

import gitImg from '../../Assets/Images/Social/git.svg';
import mailImg from '../../Assets/Images/Social/mail.svg';
import instaImg from '../../Assets/Images/Social/insta.svg';
import linkedInImg from '../../Assets/Images/Social/linkedin.svg';

const HorizontalScrollClass = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  height: 200px;
  margin: 0 auto;
  margin-top: 100px;
`;

const SocialLogo = styled.img`
  height: 100px;
  margin: 0 50px;

  @media ${device.tablet} {
    height: 80px;
    margin: 0 30px;
  }

  @media ${device.mobileL} {
    height: 60px;
    margin: 0 20px;
  }
`;

const HorizontalScroll = () => {
  return (
    <HorizontalScrollClass>
      <SocialLogo src={linkedInImg} alt="LinkedIn" />
      <SocialLogo src={gitImg} alt="Github" />
      <SocialLogo src={mailImg} alt="Mail" />
      <SocialLogo src={instaImg} alt="Instagram" />
    </HorizontalScrollClass>
  );
};

export default HorizontalScroll;
