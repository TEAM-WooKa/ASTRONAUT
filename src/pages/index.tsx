import Button from '@/component/common/Button';
import withLayout from '@/component/hoc/withLayout';
import Image from 'next/image';
import styled from 'styled-components';

function Home() {
  return (
    <Wrapper>
      <div>
        <MainLogoWrapper>
          <Image src={'/main_logo.png'} alt="logo" width={380} height={80} />
        </MainLogoWrapper>
        <TextWrapper>
          <p>지구에 불시착한 길잃은 우주인인 당신!</p>
          <p>당신의 고향별은 어디였을까요?</p>
          <p>우주인 테스트 후</p>
          <p>우주인 ID 카드를 발급 받을 수 있습니다.</p>
        </TextWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainLogoWrapper = styled.div`
  margin: 60px 0;
`;
const TextWrapper = styled.div`
  color: ${(props) => props.theme.colors.bg2};
  background-color: ${(props) => props.theme.colors.main2};
  border: 1px solid ${(props) => `${props.theme.colors.sub3}`};
  padding: 20px 0;
  text-align: center;
  line-height: normal;
  font-size: 20px;
  border-radius: 20px;
`;

export default withLayout(Home, 'title', 'desc');
