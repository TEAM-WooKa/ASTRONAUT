import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AButton from '@/component/common/AButton';
import AText from '@/component/common/AText';
import CircleButton from '@/component/common/CircleButton';
import withLayout from '@/component/hoc/withLayout';
import ProgressBar from '@/component/question/progress-bar';
import AImage from '@/component/common/AImage';

const QUESTION_END_CNT = 10;

function Question() {
  const router = useRouter();

  const [answers, setAnswers] = useState<string[]>([]);
  const questionIndex = answers.length;

  const handleBackButtonClick = () => {};

  const handleAnswerClick = (flag: 'YES' | 'NO') => {
    if (questionIndex === QUESTION_END_CNT - 1) {
      //TODO: test end
      const resultID: number = 1;
      router.push(`/result/${resultID}`);
    }

    setAnswers([...answers, flag]);
  };

  return (
    <Wrapper>
      <div>
        <Image
          src="/we-are-The Astronauts.png"
          width={230}
          height={52}
          alt="we-are-The Astronauts"
        />
      </div>
      <ProgressBar percent={questionIndex * 10} />
      <div>
        <div>
          <Image
            src="/images/planet.webp"
            alt="space image"
            width={244}
            height={244}
            placeholder="blur"
            blurDataURL={'/images/blur.webp'}
            priority
          />
        </div>
        <QuestionWrapper>
          <p> Q1. 나는 우주에 인간 외에</p>
          <p> 다른 지적 생명체가 존재한다고 생각한다.</p>
        </QuestionWrapper>
      </div>
      <ButtonWrapper>
        <AButton content="> YES" onClick={() => handleAnswerClick('YES')} />
      </ButtonWrapper>
      <ButtonWrapper>
        <AButton content="> NO" onClick={() => handleAnswerClick('NO')} />
      </ButtonWrapper>
      <CircleButton onClick={handleBackButtonClick}>
        <Image
          src={'/back-arrow.png'}
          width={27}
          height={23}
          alt="back-button"
        />
      </CircleButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

const QuestionWrapper = styled(AText)`
  color: ${(props) => props.theme.colors.sub2};
`;

const ButtonWrapper = styled.div`
  width: 200px;
`;
export default withLayout(
  Question,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
