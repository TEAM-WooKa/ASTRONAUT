import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import GradientBox from '@/component/common/GradientBox';
import withLayout from '@/component/hoc/withLayout';
import Answer from '@/component/question/answer/index';
import ColorAnswer from '@/component/question/color-answer';
import ProgressBar from '@/component/question/progress-bar';
import { QUESTION_INFO_LIST } from '@/constants/question';
import type {
  AnswerHistoryType,
  AnswerType,
  CharacterColorType,
  CharacterType,
} from '@/types/question';
import { getColorImageUrl } from '@/utils/answer';
import { setStorage } from '@/utils/storage';

const FIRST_QUESTION_ID = '1';
const questions = QUESTION_INFO_LIST;
const PROGRESS_STEP = 10;

function Question() {
  const router = useRouter();
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryType[]>([]);
  const [progressPercent, setProgressPercent] = useState(0);

  const [answerColorStatus, setAnswerColorStatus] = useState('3');
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
    console.log('newAnswer: ', newAnswer);
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

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAnswerColorStatus(value);
  };

  // if (currentQuestion === undefined) return <></>;

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
      <div>
        <ImageBox>
          {isColorQuestion ? (
            <Image
              src={getColorImageUrl(answerColorStatus)}
              alt="character image"
              width={250}
              height={191}
              placeholder="blur"
              blurDataURL="/images/blur.webp"
              priority
            />
          ) : (
            getQuestionCharacterImage(
              currentQuestion.color,
              currentQuestion.character,
            )
          )}
        </ImageBox>
        <GradientBox title={`Q${currentQuestion.id}`}>
          <QuestionInnerBox>
            {currentQuestion.content.map((q, index) => (
              <p key={index + q}>{q}</p>
            ))}
          </QuestionInnerBox>
        </GradientBox>
      </div>
      {isColorQuestion ? (
        <ColorAnswer
          handleAnswerSubmit={handleAnswerClick}
          answerColorStatus={answerColorStatus}
          handleAnswerChange={handleAnswerChange}
        />
      ) : (
        <Answer
          type={currentQuestion.type}
          answers={currentQuestion.answers}
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

const ImageBox = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionInnerBox = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  width: 330px;

  color: ${(props) => props.theme.colors.bg};
`;

const getQuestionCharacterImage = (
  color: CharacterColorType,
  character: CharacterType,
) => {
  const imageURL = `/problem/${color}_${character}.png`;
  const { width, height } = getCharacterImageSize(character);

  return (
    <Image
      src={imageURL}
      alt="character image"
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={'/images/blur.webp'}
      priority
    />
  );
};

const getCharacterImageSize = (
  character: string,
): {
  width: number;
  height: number;
} => {
  switch (character) {
    case 'lumy':
      return {
        width: 258,
        height: 191,
      };
    case 'lanny':
      return {
        width: 269,
        height: 191,
      };
    case 'cat': //TODO :크기 맞는지 확인
      return {
        width: 167,
        height: 191,
      };
    default:
      return {
        width: 258,
        height: 191,
      };
  }
};

export default withLayout(
  Question,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
