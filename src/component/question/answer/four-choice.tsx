import styled from 'styled-components';

import AnswerButton from '@/component/question/answer/button';

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
      {answer.map((item) => (
        <AnswerButton
          key={item}
          content={item}
          onClick={() => handleAnswerClick(item)}
        />
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
