import { GradientButtonStyled } from '@/assets/styles/gradient';
import AnswerButton from '@/component/question/answer/button';
import { isHangulChar } from '@/utils/hangul';
import styled, { css } from 'styled-components';

type HandleAnswerClickType = (answer: string) => void;

export default function FourLong({
  handleAnswerClick,
  answer,
}: {
  handleAnswerClick: HandleAnswerClickType;
  answer: string[];
}) {
  return (
    <Wrapper>
      {answer.map((content) => (
        <ButtonWrapper key={content} onClick={() => handleAnswerClick(content)}>
          <ButtonInner isHangul={isHangulChar(content)}>
            <span>{content}</span>
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

const ButtonInner = styled(GradientButtonStyled)<{ isHangul: boolean }>`
  border-radius: 40px;
  padding: 2px;
  height: 40px;

  span {
    position: relative;
    ${(props) =>
      props.isHangul
        ? css`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
          `
        : css`
            font-family: 'Space-Rave';
            font-style: italic;
            font-size: 32px;
            left: -3px;
            bottom: 1px;
          `}
  }
`;
