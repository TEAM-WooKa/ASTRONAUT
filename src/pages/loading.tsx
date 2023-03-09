import GradientBox from '@/component/common/GradientBox';
import Loading from '@/component/common/loading';
import withLayout from '@/component/hoc/withLayout';
import {
  QUESTION_DATA,
  subQuestion2,
  subQuestion5,
} from '@/component/question/data';
import { getStorage } from '@/utils/storage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const getCharacter = (answers: { id: number; answer: string }[]) => {
  // TODO : answer index 받아오기
  let total = 0;
  for (let i = 0; i < answers.length - 1; i++) {
    if (answers[i].id == 3) {
      if (answers[i].answer === '1') {
        total += 4;
      } else if (answers[i].answer === '2') {
        total += 2;
      } else {
        total += 1;
      }
      continue;
    }
    if (answers[i].id === 2) {
      const prevAnswer = answers[i - 1].answer;
      const prevAnswerIdx = [
        '일기장',
        '좋아하는 책',
        '꽃이 담긴 화분',
        '카메라',
      ].indexOf(prevAnswer);
      const answerList = subQuestion2[prevAnswerIdx]?.answer;
      const answerIdx = answerList?.indexOf(answers[i].answer) ?? 0;

      total += answerIdx + 1;
      continue;
    }
    if (answers[i].id === 5) {
      const prevAnswer = answers[i - 1].answer;
      const prevAnswerIdx = ['YES', 'NO'].indexOf(prevAnswer);

      const answerList = subQuestion5[prevAnswerIdx]?.answer;
      const answerIdx = answerList?.indexOf(answers[i].answer) ?? 0;
      console.log('answerIdx: ', answers[i].id, answerIdx);
      total += answerIdx + 1;

      continue;
    }
    const answerList = QUESTION_DATA[i].answer ?? ['YES', 'NO'];
    const answerIdx = answerList?.indexOf(answers[i].answer) ?? 0;
    total += answerIdx + 1;
  }

  const lastAnswerIdx = answers.length - 1;
  const answerList = QUESTION_DATA[lastAnswerIdx].answer;
  const answerIdx = answerList?.indexOf(answers[lastAnswerIdx].answer) ?? 0;

  if (total < 8 || total >= 30) {
    return answerIdx === 0 || answerIdx === 1
      ? { char: 'dake', color: 'cheese' }
      : { char: 'dake', color: 'black' };
  }
  if (answerIdx === 0 || answerIdx === 1) {
    return { char: 'lanny', color: getTotalColor(total) };
  } else {
    return { char: 'lumi', color: getTotalColor(total) };
  }
};

const getTotalColor = (total: number) => {
  if (total <= 14) {
    return 'yellow';
  }
  if (total <= 20) {
    return 'green';
  }
  return 'purple';
};

const calcResult = (answers: { id: number; answer: string }[]) => {
  const whatILike = answers[5].answer;
  const goal = answers[7].answer;
  console.log('answers: ', answers);
  const { color, char } = getCharacter(answers);
  return { color, char, whatILike, goal };
};

// TODO: 더미 데이터를 지우고, localStorage에서 데이터를 가져와야 함.
const getUserInputData = () => {
  const answers = getStorage('astronauts-answers');
  const user = getStorage('user');

  if (user === null || answers === null) return;

  const { name, birth } = JSON.parse(user);

  const { color, char, whatILike, goal } = calcResult(JSON.parse(answers));
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

  useEffect(() => {
    let timer = setInterval(() => {
      router.push({
        pathname: '/result/[type]',
        query: { type: 1, ...userData },
      });
    }, 3000);

    return () => clearInterval(timer);
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
  color: #fff;
  font-style: italic;
  font-weight: 400;
  font-size: 28px;
  line-height: 26px;
  /* identical to box height, or 93% */

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
