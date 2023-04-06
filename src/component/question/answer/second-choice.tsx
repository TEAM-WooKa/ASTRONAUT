import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';
import type { AnswerRequestType } from '@/types/question';

export default function SecondChoice({
  onAnswerClick,
  answers,
}: AnswerRequestType) {
  return (
    <>
      {answers.map((answer) => (
        <ButtonWrapper key={answer.label}>
          <Wrapper onClick={() => onAnswerClick(answer)}>
            <span>{answer.label}</span>
          </Wrapper>
        </ButtonWrapper>
      ))}
    </>
  );
}

const ButtonWrapper = styled.div`
  width: 120px;
`;

const Wrapper = styled(GradientButtonStyled)`
  border-radius: 40px;
  padding: 2px;
  width: 130px;

  span {
    font-family: 'Space-Rave';
    font-style: italic;
    font-size: 32px;
    left: -3px;
    bottom: 1px;
  }
`;
