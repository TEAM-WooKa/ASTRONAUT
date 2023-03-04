import { GradientButtonStyled } from '@/assets/styles/gradient';
import styled from 'styled-components';

interface AnswerProps {
  type: 'button-2' | 'color' | 'button-4';
  answer?: string[];

  handleAnswerClick: (answer: string) => void;
}

export default function Answer({
  type,
  answer,
  handleAnswerClick,
}: AnswerProps) {
  if (type === 'button-2') {
    return <SecondChoice handleAnswerClick={handleAnswerClick} />;
  }
  return <div>Answer</div>;
}

function SecondChoice({
  handleAnswerClick,
}: {
  handleAnswerClick: (answer: string) => void;
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
