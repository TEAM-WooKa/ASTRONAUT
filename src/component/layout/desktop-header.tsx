import Image from 'next/image';
import styled from 'styled-components';

export default function DesktopHeader() {
  return (
    <Wrapper>
      <Image
        src={'/images/main-title.webp'}
        alt="Astronaut ID Card service"
        width={350}
        height={124}
      />
      <TeamText>© 2023. TEAM-Wooka all rights reserved.</TeamText>
      <IconWrapper>
        <Image
          src="/icons/github-icon.png"
          alt="github"
          width={23}
          height={23}
        />
        <Image
          src="/icons/instagram-icon.png"
          alt="instagram"
          width={23}
          height={23}
        />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 475px;

  background-color: #f1f1f1a6;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 10;

  display: none;
  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const TeamText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #5a5a5a;
`;

const IconWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;
