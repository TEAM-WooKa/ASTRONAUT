import type { ChangeEvent } from 'react';

import Color from '@/component/question/answer/color';
import FourChoice from '@/component/question/answer/four-choice';
import FourLong from '@/component/question/answer/fout-long';
import SecondChoice from '@/component/question/answer/second-choice';
import type { QuestionCategory } from '@/component/question/data';

interface AnswerProps {
  type: QuestionCategory;
  answer?: string[];
  answerColorStatus: string;
  handleAnswerChange: (e: ChangeEvent<HTMLInputElement>) => void;

  handleAnswerClick: (answer: string) => void;
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
      <FourChoice onAnswerClick={handleAnswerClick} answer={answer ?? []} />
    );
  }
  if (type === 'long-4') {
    return (
      <FourLong handleAnswerClick={handleAnswerClick} answer={answer ?? []} />
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
