import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';
import type { AnswerRequestType } from '@/types/question';

export default function FourLong({
  onAnswerClick,
  answers,
}: AnswerRequestType) {
  return (
    <Wrapper>
      {answers.map((answer) => (
        <ButtonWrapper key={answer.label} onClick={() => onAnswerClick(answer)}>
          <ButtonInner>
            <span>{answer.label}</span>
          </ButtonInner>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ButtonWrapper = styled.div`
  width: 300px;
  height: 40px;
`;

const ButtonInner = styled(GradientButtonStyled)`
  border-radius: 40px;
  padding: 2px;
  height: 40px;

  span {
    position: relative;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
`;
