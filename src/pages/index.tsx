import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';

function Home() {
  const router = useRouter();

  const goTest = () => {
    router.push('question');
  };

  return (
    <Wrapper>
      <div>
        <MainLogoWrapper>
          <Image
            src={'/images/title.png'}
            alt="logo"
            width={350}
            height={124}
          />
        </MainLogoWrapper>
        <GradientBorderBox>
          <TextWrapper>
            <p>지구별에 여행 온 우주인인 당신!</p>
            <p>지구별에서 행복한 여행을 즐기고 있으신가요?</p>
            <br />
            <p>언젠가 수명이 다해 고향별로 돌아가기 위해선</p>
            <p> 우주인 ID 카드 발급이 필요합니다</p>
            <br />
            <p> 우주인 테스트 후 ID 카드를 발급 받을 수 있습니다.</p>
            <p> 같은 별에서 온 우주인 친구들을 찾아보세요.</p>
          </TextWrapper>
        </GradientBorderBox>

        <ImageWrapper>
          <Image
            src={'/images/main_lanny.png'}
            alt="logo"
            width={216}
            height={154}
          />
        </ImageWrapper>
      </div>
      <ButtonWrapper>
        <GradientButton onClick={goTest}>&gt; test</GradientButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  width: 100%;
  height: 100%;
`;

const MainLogoWrapper = styled.div`
  margin-bottom: 32px;

  img {
    max-width: 100%;
  }
`;

const TextWrapper = styled(AText)`
  color: ${(props) => props.theme.colors.main2};
  font-size: 1rem;
  font-weight: 700;
  padding: 20px 0;
  border-radius: 20px;
  line-height: 24px;
`;

const ButtonWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
`;

const GradientButton = styled(GradientButtonStyled)`
  font-size: 32px;
  border-radius: 40px;
  padding: 2px;
`;

const ImageWrapper = styled.div`
  margin-top: 25px;
`;

export default withLayout(Home, 'title', 'desc');
