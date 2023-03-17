import styled, { css } from 'styled-components';

import { GradientButtonStyled } from '@/assets/styles/gradient';
import { isHangulChar } from '@/utils/hangul';

interface AnswerButtonProps {
  content: string;
  onClick: () => void;
}
export default function AnswerButton({ content, onClick }: AnswerButtonProps) {
  return (
    <ButtonWrapper>
      <Wrapper isHangul={isHangulChar(content)} onClick={onClick}>
        <span>{content}</span>
      </Wrapper>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 120px;
`;

const Wrapper = styled(GradientButtonStyled)<{ isHangul: boolean }>`
  border-radius: 40px;
  padding: 2px;
  width: 130px;

  span {
    position: relative;
    font-family: 'Pretendard';
    font-style: normal;
    font-size: 20px;
    font-weight: bold;
    /* ${(props) =>
      props.isHangul
        ? css`
            font-family: 'Pretendard';
            font-style: normal;
            font-size: 20px;
            font-weight: bold;
          `
        : css`
            font-family: 'Space-Rave';
            font-style: italic;
            font-size: 32px;
            left: -3px;
            bottom: 1px;
          `} */
  }
`;
