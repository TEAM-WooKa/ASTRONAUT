import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AText from '@/component/common/AText';

import withLayout from '@/component/hoc/withLayout';
import ProgressBar from '@/component/question/progress-bar';
import { GradientButtonStyled } from '@/assets/styles/gradient';
import GradientBox from '@/component/common/GradientBox';
import Answer from '@/component/question/answer';

interface QuestionType {
  id: number;
  type: 'button-2' | 'color' | 'button-4';
  question: string;
  answer?: string[];
}
const QUESTION_END_CNT = 10;
const QUESTION_DATA: QuestionType[] = [
  {
    id: 1,
    type: 'button-2',
    question: '우주에 인간 외에 다른 지적 생명체가 존재한다고 생각하시나요?',
  },
  {
    id: 2,
    type: 'button-2',
    question: '우주에 인간 외에 다른 지적 생명체가 존재한다고 생각하시나요?',
  },
  {
    id: 3,
    type: 'color',
    question:
      '좋아하는 색상을 알려주세요! (별을 슬라이드하여 색을 선택할 수 있습니다.)',
  },
  {
    id: 4,
    type: 'button-4',
    question: '애완 동물을 기르시나요? 혹은 길렀던/기르고 싶은 동물이 있나요? ',
    answer: ['고양이', '강아지', '새', '없음'],
  },
  {
    id: 5,
    type: 'button-2',
    question: '우주에 인간 외에 다른 지적 생명체가 존재한다고 생각하시나요?',
  },
  {
    id: 6,
    type: 'color',
    question:
      '좋아하는 색상을 알려주세요! (별을 슬라이드하여 색을 선택할 수 있습니다.)',
  },
  {
    id: 7,
    type: 'button-4',
    question: '애완 동물을 기르시나요? 혹은 길렀던/기르고 싶은 동물이 있나요? ',
    answer: ['고양이', '강아지', '새', '없음'],
  },
  {
    id: 8,
    type: 'button-2',
    question: '우주에 인간 외에 다른 지적 생명체가 존재한다고 생각하시나요?',
  },
  {
    id: 9,
    type: 'color',
    question:
      '좋아하는 색상을 알려주세요! (별을 슬라이드하여 색을 선택할 수 있습니다.)',
  },
  {
    id: 10,
    type: 'button-2',
    question: '우주에 인간 외에 다른 지적 생명체가 존재한다고 생각하시나요?',
  },
];

const questions = QUESTION_DATA;
function Question() {
  const router = useRouter();

  const [answers, setAnswers] = useState<string[]>([]);
  const questionIndex = answers.length;

  const handleAnswerClick = (flag: string) => {
    console.log('flag: ', flag);
    // if (questionIndex === QUESTION_END_CNT - 1) {
    //   //TODO: test end
    //   const resultID: number = 1;
    //   router.push(`/result/${resultID}`);
    // }

    // setAnswers([...answers, flag]);
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
      <ProgressBar percent={questionIndex * 10} />
      <div>
        <ImageBox>
          <Image
            src="/images/romi.png"
            alt="space image"
            width={250}
            height={191}
            placeholder="blur"
            blurDataURL={'/images/blur.webp'}
            priority
          />
        </ImageBox>
        <GradientBox title="Q1">
          <QuestionInnerBox>
            <p>우주에 인간 외에 </p>
            <p>다른 지적 생명체가 존재한다고 생각하시나요?</p>
          </QuestionInnerBox>
        </GradientBox>
      </div>
      <Answer
        type={questions[questionIndex].type}
        answer={questions[questionIndex].answer}
        handleAnswerClick={handleAnswerClick}
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

const CircleButton = styled.button`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  width: 43px;
  height: 43px;
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

const QuestionInnerBox = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  width: 330px;
`;

export default withLayout(
  Question,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
