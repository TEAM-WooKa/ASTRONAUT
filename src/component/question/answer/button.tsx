import styled from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';

interface AnswerButtonProps {
  content: string;
  onClick: () => void;
}
export default function AnswerButton({ content, onClick }: AnswerButtonProps) {
  return (
    <ButtonWrapper>
      <Wrapper onClick={onClick}>
        <span>{content}</span>
      </Wrapper>
    </ButtonWrapper>
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
    position: relative;
    font-family: 'Pretendard';
    font-style: normal;
    font-size: 20px;
    font-weight: bold;
  }
`;
