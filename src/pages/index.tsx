import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/hoc/withLayout';

function Home() {
  const router = useRouter();

  const goTest = () => {
    router.push('question');
  };

  return (
    <>
      <Wrapper>
        <div>
          <MainLogoWrapper>
            <Image
              src={'/images/main-title.webp'}
              alt="Astronaut ID Card service"
              width={350}
              height={124}
            />
          </MainLogoWrapper>
          <GradientBorderBox>
            <TextWrapper>
              <p> 우리는 모두 먼 우주의 어느 별에서 태어나서 </p>
              <p>지구로 잠시 여행온 우주인이라는 사실 알고계셨나요?</p>
              <br />
              <p>지구별에서의 수명이 끝나면 </p>
              <p>우리는 각자가 태어난 고향별로 돌아가야 합니다.</p>
              <br />
              <p>테스트를 통해 우주인님의 고향별 캐릭터를 찾고</p>
              <p>우주선 탑승에 필요한 ID 카드를 공유해보세요.</p>
              <br />
              <p>그리고 같은 별에서 온 우주인 친구들을 찾아보세요.</p>
            </TextWrapper>
          </GradientBorderBox>

          <ImageWrapper>
            <Image
              src={'/character_shadow/green_lanny.webp'}
              alt="logo"
              width={216}
              height={153.88}
            />
          </ImageWrapper>
        </div>
        <ButtonWrapper>
          <GradientButton onClick={goTest}>&gt; test</GradientButton>
        </ButtonWrapper>
      </Wrapper>
    </>
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
  margin-bottom: 10px;

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
  margin: 25px auto 0;
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
