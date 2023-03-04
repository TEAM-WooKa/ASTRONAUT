import { GradientButtonStyled } from '@/assets/styles/gradient';
import FourChoice from '@/component/question/answer/four-choice';
import SecondChoice from '@/component/question/answer/second-choice';
import styled from 'styled-components';

type HandleAnswerClickType = (answer: string) => void;

interface AnswerProps {
  type: 'button-2' | 'color' | 'button-4';
  answer?: string[];

  handleAnswerClick: HandleAnswerClickType;
}

export default function Answer({
  type,
  answer,
  handleAnswerClick,
}: AnswerProps) {
  console.log('answer: ', answer);
  if (type === 'button-2') {
    return <SecondChoice handleAnswerClick={handleAnswerClick} />;
  }
  if (type === 'button-4') {
    return (
      <FourChoice handleAnswerClick={handleAnswerClick} answer={answer ?? []} />
    );
  }
  return <div>Answer</div>;
}
