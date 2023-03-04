import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import star from '@/assets/images/Star2.png';
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
  );
}

//? 참고 링크 : https://stickode.tistory.com/472
const InputWrapper = styled.div`
  background: ${(props) => props.theme.colors[1]};
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
