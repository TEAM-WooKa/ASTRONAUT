import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';
import type { AnswerRequestType } from '@/types/question';

export default function FourChoice({
  onAnswerClick,
  answers,
}: AnswerRequestType) {
  return (
    <Wrapper>
      {answers.map((answer) => (
        <ButtonWrapper key={answer.label} onClick={() => onAnswerClick(answer)}>
          <span>{answer.label}</span>
        </ButtonWrapper>
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

const ButtonWrapper = styled(GradientButtonStyled)`
  border-radius: 40px;
  padding: 2px;
  width: 130px;

  span {
    position: relative;
    font-family: 'Pretendard';
    font-style: normal;
    font-size: 20px;
    font-weight: bold;
  }
`;
