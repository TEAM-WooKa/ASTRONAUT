import React from 'react';

import FourChoice from '@/component/question/answer/four-choice';
import FourLong from '@/component/question/answer/four-long';
import SecondChoice from '@/component/question/answer/second-choice';
import type {
  AnswerListType,
  AnswerType,
  QuestionType,
} from '@/types/question';

interface AnswerProps {
  type: QuestionType;
  answers: AnswerListType;
  handleAnswerClick: (answer: AnswerType) => void;
}

export default function Answer({
  type,
  answers,
  handleAnswerClick,
}: AnswerProps) {
  if (type === 'four-choice') {
    return <FourChoice onAnswerClick={handleAnswerClick} answers={answers} />;
  }
  if (type === 'four-sentence') {
    return <FourLong onAnswerClick={handleAnswerClick} answers={answers} />;
  }
  if (type === 'two-choice') {
    return <SecondChoice onAnswerClick={handleAnswerClick} answers={answers} />;
  }
  return <div></div>;
}
