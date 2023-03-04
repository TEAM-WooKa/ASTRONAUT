import { GradientButtonStyled } from '@/assets/styles/gradient';
import { isHangulChar } from '@/utils/hangul';
import styled, { css } from 'styled-components';

type HandleAnswerClickType = (answer: string) => void;

export default function FourChoice({
  handleAnswerClick,
  answer,
}: {
  handleAnswerClick: HandleAnswerClickType;
  answer: string[];
}) {
  return (
    <Wrapper>
      {answer.map((item, index) => (
        <ButtonWrapper>
          <GradientButton onClick={() => handleAnswerClick(item)}>
            <Text isHangul={isHangulChar(item)}>{item}</Text>
          </GradientButton>
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

// TODO : 한영 따로 폰트 적용
const GradientButton = styled(GradientButtonStyled)`
  border-radius: 40px;
  padding: 2px;
  width: 126px;
`;

const ButtonWrapper = styled.div`
  width: 120px;
`;

const Text = styled.span<{ isHangul: boolean }>`
  position: relative;

  ${(props) =>
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
          left: -3px;
          bottom: 1px;
        `}
`;
