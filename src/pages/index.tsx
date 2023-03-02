import {
  GradientBoxStyled,
  GradientButtonStyled,
} from '@/assets/styles/gradient';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
            src={'/images/at_title_img.webp'}
            alt="logo"
            width={380}
            height={80}
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
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding: 50px 20px;
`;

const MainLogoWrapper = styled.div`
  margin-bottom: 60px;

  img {
    max-width: 100%;
  }
`;

const TextWrapper = styled(AText)`
  line-height: 25px;
  color: ${(props) => props.theme.colors.main2};
  font-size: 1rem;
  font-weight: 700;
  padding: 20px 0;
  border-radius: 20px;
  letter-spacing: 0.5%;
`;

const ButtonWrapper = styled.div`
  width: 280px;
`;

const GradientButton = styled(GradientButtonStyled)`
  font-size: 32px;
  border-radius: 20px;
  padding: 2px;
`;

export default withLayout(Home, 'title', 'desc');
