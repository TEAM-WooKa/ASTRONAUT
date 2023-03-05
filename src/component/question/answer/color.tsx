import { ChangeEvent } from 'react';
import styled from 'styled-components';
import star from '@/assets/images/Star2.png';
import { GradientButtonStyled } from '@/assets/styles/gradient';
type HandleAnswerClickType = (answer: string) => void;
export default function Color({
  handleAnswerClick,
  handleAnswerChange,
  answerColorStatus,
}: {
  handleAnswerClick: HandleAnswerClickType;
  answerColorStatus: string;
  handleAnswerChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <InputWrapper>
        <input
          type="range"
          max={3}
          step={1}
          min={1}
          value={answerColorStatus}
          onChange={handleAnswerChange}
        />
      </InputWrapper>
      <GradientButton onClick={() => handleAnswerClick(answerColorStatus)}>
        <span>Submit</span>
      </GradientButton>
    </>
  );
}

//? 참고 링크 : https://stickode.tistory.com/472
const InputWrapper = styled.div`
  background: linear-gradient(
    253.86deg,
    #feac5e 16.16%,
    #c779d0 50.65%,
    #4bc0c8 84.32%
  );

  width: 322px;
  height: 68px;

  input {
    width: 85%;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    height: 100%;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      width: 51px; /* 슬라이더 핸들 길이 */
      height: 51px; /* 슬라이더 핸들 높이 */
      background-image: url(${star.src});
      cursor: pointer;
    }

    &::-moz-range-thumb {
      -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      width: 51px;
      height: 51px; /* 슬라이더 핸들 높이 */
      background-image: url(${star.src});
      cursor: pointer;
    }
  }
`;

const GradientButton = styled(GradientButtonStyled)`
  font-family: 'Space-Rave';

  font-size: 32px;
  border-radius: 40px;
  padding: 2px;
  width: 180px;

  span {
    position: relative;
    left: -3px;
    bottom: 1px;
  }
`;
