import Loading from '@/component/common/loading';
import withLayout from '@/component/hoc/withLayout';
import { getStorage } from '@/utils/storage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

// TODO: 더미 데이터를 지우고, localStorage에서 데이터를 가져와야 함.
const getUserInputData = () => {
  const data = getStorage('astronauts-answers');
  const user = getStorage('user');

  if (user === null || data === null) return;

  const { name, birth } = JSON.parse(user);

  const total = {
    name,
    birth,
    whatILike: '음악 감상',
    goal: '지구별 정복',
  };

  return total;
};

function LoadingPage() {
  const router = useRouter();

  const value = useRef(0);

  const handleTime = () => {
    value.current += 1;

    if (value.current >= 30) {
      const userData = getUserInputData();

      router.push({
        pathname: '/result/[type]',
        query: { type: 1, ...userData },
      });
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      handleTime();
    }, 100);

    return () => clearInterval(timer);
  }, []);

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
