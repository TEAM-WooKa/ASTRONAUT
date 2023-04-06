import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { GITHUB_URL, INSTAGRAM_URL } from '@/constants/path';

export default function MobileFooter() {
  const router = useRouter();

  if (router.pathname !== '/') return <></>;
  return (
    <Wrapper>
      <TeamText>Astronaut ID Card Service. </TeamText>
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
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 50px;
  z-index: 10;
  padding: 20px 28px;
  background-color: #f1f1f182;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const TeamText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #5a5a5a;
  line-height: 20px;
`;

const IconWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;
