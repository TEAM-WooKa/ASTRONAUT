import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';

type HandleAnswerClickType = (answer: string) => void;

export default function SecondChoice({
  handleAnswerClick,
}: {
  handleAnswerClick: HandleAnswerClickType;
}) {
  return (
    <>
      <ButtonWrapper>
        <Wrapper onClick={() => handleAnswerClick('YES')}>
          <span>YES</span>
        </Wrapper>
      </ButtonWrapper>
      <ButtonWrapper>
        <Wrapper onClick={() => handleAnswerClick('NO')}>
          <span>NO</span>
        </Wrapper>
      </ButtonWrapper>
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
