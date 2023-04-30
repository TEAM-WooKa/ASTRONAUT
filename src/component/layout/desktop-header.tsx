import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import Notice from '@/component/notice';
import { GITHUB_URL, INSTAGRAM_URL } from '@/constants/path';

export default function DesktopHeader() {
  const router = useRouter();
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const goHome = () => {
    router.push('/');
  };

  return (
    <Wrapper>
      <div onClick={goHome}>
        <Image
          src={'/images/main-title.webp'}
          alt="Astronaut ID Card service"
          width={350}
          height={124}
        />
      </div>
      <TeamText>© 2023. TEAM-Wooka all rights reserved.</TeamText>
      <IconWrapper>
        <Link href={GITHUB_URL}>
          <Image
            src="/icons/github-icon.png"
            alt="github"
            width={23}
            height={23}
          />
        </Link>
        <Link href={INSTAGRAM_URL}>
          <Image
            src="/icons/instagram-icon.png"
            alt="instagram"
            width={23}
            height={23}
          />
        </Link>
      </IconWrapper>
      <NoticeWrapper
        onClick={() => setIsNoticeOpen((prev) => !prev)}
        isOpen={isNoticeOpen}
      >
        <Notice />
      </NoticeWrapper>
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
  position: relative;
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

const NoticeWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 0;
  height: 35px;
  overflow: hidden;
  transition: height 0.5s ease-in-out;

  ${({ isOpen }) => isOpen && `height: 290px;`};
`;
