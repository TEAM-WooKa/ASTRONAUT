import styled from 'styled-components';

import AnswerButton from '@/component/question/answer/button';
import type { AnswerRequestType } from '@/types/question';

export default function FourChoice({
  onAnswerClick,
  answers,
}: AnswerRequestType) {
  return (
    <Wrapper>
      {answers.map((answer) => (
        <AnswerButton
          key={answer.label}
          content={answer.label}
          onClick={() => onAnswerClick(answer)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 16px;
  width: 100%;
`;
