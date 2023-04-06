import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import withLayout from '@/component/hoc/withLayout';
import BasicQuestion from '@/component/question/basic-question';
import ColorQuestion from '@/component/question/color-question';
import ProgressBar from '@/component/question/progress-bar';
import { QUESTION_INFO_LIST } from '@/constants/question';
import type { AnswerHistoryType, AnswerType } from '@/types/question';
import { setStorage } from '@/utils/storage';

const FIRST_QUESTION_ID = '1';
const questions = QUESTION_INFO_LIST;
const PROGRESS_STEP = 10;

function Question() {
  const router = useRouter();
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryType[]>([]);
  const [progressPercent, setProgressPercent] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(FIRST_QUESTION_ID);

  const currentQuestion = questions[currentQuestionIndex];
  const isColorQuestion = currentQuestion.type === 'color';

  const getNewAnswer = (answer: AnswerType) => {
    const newAnswer: AnswerHistoryType[] = [
      ...answerHistory,
      {
        id: currentQuestion.id,
        ...answer,
      },
    ];
    setAnswerHistory(newAnswer);
    return newAnswer;
  };

  const handleAnswerClick = (answer: AnswerType) => {
    const nextQuestionId = answer.nextQuestionId
      ? answer.nextQuestionId
      : currentQuestion.nextQuestionId;

    const newAnswer = getNewAnswer(answer);
    if (nextQuestionId === 'end') {
      setStorage('astronauts-answers', JSON.stringify(newAnswer));
      router.push(`/user`);
      return;
    }

    setCurrentQuestionIndex(nextQuestionId);
    setProgressPercent(progressPercent + PROGRESS_STEP);
  };

  return (
    <Wrapper>
      <div>
        <Image
          src="/images/we_are_the_astronauts.png"
          width={255}
          height={75}
          alt="we-are-The Astronauts"
        />
      </div>
      <ProgressBar percent={progressPercent} />
      {isColorQuestion ? (
        <ColorQuestion
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      ) : (
        <BasicQuestion
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export default withLayout(
  Question,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
