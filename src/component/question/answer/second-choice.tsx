import { GradientButtonStyled } from '@/assets/styles/gradient';
import styled from 'styled-components';

type HandleAnswerClickType = (answer: string) => void;

export default function SecondChoice({
  handleAnswerClick,
}: {
  handleAnswerClick: HandleAnswerClickType;
}) {
  return (
    <>
      <ButtonWrapper>
        <GradientButton onClick={() => handleAnswerClick('YES')}>
          <span>YES</span>
        </GradientButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <GradientButton onClick={() => handleAnswerClick('NO')}>
          <span>NO</span>
        </GradientButton>
      </ButtonWrapper>
    </>
  );
}

const GradientButton = styled(GradientButtonStyled)`
  font-family: 'Space-Rave';

  font-size: 32px;
  border-radius: 40px;
  padding: 2px;
  width: 126px;

  span {
    position: relative;
    left: -3px;
    bottom: 1px;
  }
`;
const ButtonWrapper = styled.div`
  width: 120px;
`;
