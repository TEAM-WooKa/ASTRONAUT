import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AText from '@/component/common/AText';

import withLayout from '@/component/hoc/withLayout';
import ProgressBar from '@/component/question/progress-bar';
import { GradientButtonStyled } from '@/assets/styles/gradient';
import GradientBox from '@/component/common/GradientBox';

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
          src="/images/we_are_the_astronauts.png"
          width={255}
          height={75}
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
        <GradientBox title="Q1">
          <InnerGradientBox>
            <p>나는 우주에 인간 외에</p>
            <p>다른 지적 생명체가 존재한다고 생각한다.</p>
          </InnerGradientBox>
        </GradientBox>
      </div>

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

      <CircleButton onClick={handleBackButtonClick}>
        <Image
          src={'/back-arrow.png'}
          width={20}
          height={24}
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

const ButtonWrapper = styled.div`
  width: 120px;
`;

const CircleButton = styled.button`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  width: 43px;
  height: 43px;
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

const InnerGradientBox = styled.div`
  padding: 20px;
  font-size: 16px;
  width: 330px;
`;

const GradientButton = styled(GradientButtonStyled)`
  font-size: 32px;
  border-radius: 40px;
  padding: 2px;
  width: 120px;

  span {
    position: relative;
    left: -3px;
    bottom: 1px;
  }
`;

export default withLayout(
  Question,
  '우주인 테스트',
  '우주인 아이디 카드 테스트 중',
);
