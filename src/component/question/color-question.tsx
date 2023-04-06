import Image from 'next/image';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import GradientBox from '@/component/common/GradientBox';
import ColorAnswer from '@/component/question/color-answer';
import type { AnswerType, ColorQuestionInfoType } from '@/types/question';
import { getColorImageUrl } from '@/utils/answer';

export default function ColorQuestion({
  currentQuestion,
  handleAnswerClick,
}: {
  currentQuestion: ColorQuestionInfoType;
  handleAnswerClick: (answer: AnswerType) => void;
}) {
  const [answerColorStatus, setAnswerColorStatus] = useState('3');

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAnswerColorStatus(value);
  };

  return (
    <>
      <div>
        <ImageBox>
          <Image
            src={getColorImageUrl(answerColorStatus)}
            alt="character image"
            width={250}
            height={191}
            placeholder="blur"
            blurDataURL="/images/blur.webp"
            priority
          />
        </ImageBox>
        <GradientBox title={`Q${currentQuestion.id}`}>
          <QuestionInnerBox>
            {currentQuestion.content.map((q, index) => (
              <p key={index + q}>{q}</p>
            ))}
          </QuestionInnerBox>
        </GradientBox>
      </div>
      <ColorAnswer
        handleAnswerSubmit={handleAnswerClick}
        answerColorStatus={answerColorStatus}
        handleAnswerChange={handleAnswerChange}
      />
    </>
  );
}

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
