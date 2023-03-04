import Loading from '@/component/common/loading';
import withLayout from '@/component/hoc/withLayout';
import Image from 'next/image';
import styled from 'styled-components';

function LoadingPage() {
  return (
    <Wrapper>
      <MainText>Loading...</MainText>
      {/* <Image src="/LOADING.png" alt="loading..." width={140} height={26} /> */}
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 65px;
  height: 100vh;
  width: 100vw;
  max-width: 475px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const MainText = styled.div`
  font-family: 'Space Rave';
  font-size: 28px;
  color: #fff;
`;
const LoadingWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  height: fit-content;
`;

export default withLayout(
  LoadingPage,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
