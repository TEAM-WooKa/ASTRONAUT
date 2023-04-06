import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import GradientBox from '@/component/common/GradientBox';
import Loading from '@/component/common/loading';
import withLayout from '@/component/hoc/withLayout';
import getResult from '@/utils/result';
import { getStorage } from '@/utils/storage';

const getUserInputData = () => {
  const answers = getStorage('astronauts-answers');
  const user = getStorage('user');

  if (user === null || answers === null) return;

  const { name, birth } = JSON.parse(user);

  const { color, char, whatILike, goal } = getResult(JSON.parse(answers));
  const total = {
    color,
    char,
    name,
    birth,
    whatILike,
    goal,
  };

  return total;
};

function LoadingPage() {
  const router = useRouter();

  const userData = getUserInputData();
  console.log('userData: ', userData);

  useEffect(() => {
    const timer = setInterval(() => {
      router.push({
        pathname: '/result/[type]',
        query: { type: 1, ...userData },
      });
    }, 3000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <MainText>
          <Image
            src="/images/loading.svg"
            alt="loading..."
            width={155}
            height={43}
          />
        </MainText>

        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>

        <GradientBox>
          <GradientBoxInner>
            <p>이 ID카드를 지참하셔서</p>
            <p>고향별로 향하는 우주선 탑승 시 제시해주세요!</p>
          </GradientBoxInner>
        </GradientBox>
      </InnerWrapper>
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
  height: 100vh;
  width: 100vw;
  max-width: 475px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const InnerWrapper = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const GradientBoxInner = styled.div`
  padding: 10px 0 17px;
  text-align: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.bg};
`;

const MainText = styled.div`
  font-family: 'Space Rave';
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
  font-size: 28px;
  line-height: 26px;
  /* 보조 컬러 2 */
  color: #f1f1f1;
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
