import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import withLayout from '@/component/hoc/withLayout';
import ProgressBar from '@/component/question/progress-bar';
import GradientBox from '@/component/common/GradientBox';
import Answer from '@/component/question/answer';
import { QUESTION_DATA } from '@/component/question/data';
import { setStorage } from '@/utils/storage';
import { mappingColorValue, getColorImageUrl } from '@/utils/answer';

const QUESTION_END_CNT = QUESTION_DATA.length;

const questions = QUESTION_DATA;

type AnswerType = { id: number; answer: string };

function Question() {
  const router = useRouter();

  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const [answerColorStatus, setAnswerColorStatus] = useState('3');
  const questionIndex = answers.length;

  const currentQuestion = questions[questionIndex];

  const getNewAnswer = (answer: string) => {
    if (currentQuestion.id === 2) {
      const colorValue = answer as keyof typeof mappingColorValue;
      answer = mappingColorValue[colorValue];
    }

    const newAnswer = [
      ...answers,
      {
        id: currentQuestion.id,
        answer,
      },
    ];
    console.log('newAnswer: ', newAnswer);

    setAnswers(newAnswer);
    return newAnswer;
  };

  const handleAnswerClick = (answer: string) => {
    const newAnswer = getNewAnswer(answer);
    if (questionIndex === QUESTION_END_CNT - 1) {
      // TODO  : recoil 적용 생각중
      setStorage('astronauts-answers', JSON.stringify(newAnswer));
      router.push(`/user`);
    }
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAnswerColorStatus(value);
  };

  if (currentQuestion === undefined) return <></>;

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
      <ProgressBar percent={questionIndex * 10} />
      <div>
        <ImageBox>
          <Image
            src={getColorImageUrl(answerColorStatus)}
            alt="space image"
            width={250}
            height={191}
            placeholder="blur"
            blurDataURL={'/images/blur.webp'}
            priority
          />
        </ImageBox>
        <GradientBox title={`Q${questionIndex + 1}`}>
          <QuestionInnerBox>
            {currentQuestion.question.map((q, index) => (
              <p key={index + q}>{q}</p>
            ))}
          </QuestionInnerBox>
        </GradientBox>
      </div>
      <Answer
        type={currentQuestion.type}
        answer={currentQuestion.answer}
        handleAnswerClick={handleAnswerClick}
        answerColorStatus={answerColorStatus}
        handleAnswerChange={handleAnswerChange}
      />
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

export default withLayout(
  Question,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
