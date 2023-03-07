import { GradientButtonStyled } from '@/assets/styles/gradient';
import Color from '@/component/question/answer/color';
import FourChoice from '@/component/question/answer/four-choice';
import SecondChoice from '@/component/question/answer/second-choice';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

type HandleAnswerClickType = (answer: string) => void;

interface AnswerProps {
  type: 'button-2' | 'color' | 'button-4';
  answer?: string[];
  answerColorStatus: string;
  handleAnswerChange: (e: ChangeEvent<HTMLInputElement>) => void;

  handleAnswerClick: HandleAnswerClickType;
}

export default function Answer({
  type,
  answer,
  handleAnswerClick,
  handleAnswerChange,
  answerColorStatus,
}: AnswerProps) {
  if (type === 'button-2') {
    return <SecondChoice handleAnswerClick={handleAnswerClick} />;
  }
  if (type === 'button-4') {
    return (
      <FourChoice handleAnswerClick={handleAnswerClick} answer={answer ?? []} />
    );
  }
  if (type === 'color') {
    return (
      <Color
        handleAnswerClick={handleAnswerClick}
        answerColorStatus={answerColorStatus}
        handleAnswerChange={handleAnswerChange}
      />
    );
  }
  return <div>Answer</div>;
}
