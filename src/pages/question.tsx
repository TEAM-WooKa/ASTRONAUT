import AButton from '@/component/common/AButton';
import AText from '@/component/common/AText';
import CircleButton from '@/component/common/CircleButton';
import withLayout from '@/component/hoc/withLayout';
import Image from 'next/image';
import styled from 'styled-components';

function Question() {
  const handleBackButtonClick = () => {};
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
      <div>---------------------------------</div>
      <div>
        <div>
          <Image
            src="/우주 이미지.png"
            alt="우주 이미지"
            width={244}
            height={244}
          />
        </div>
        <QuestionWrapper>
          <p> Q1. 나는 우주에 인간 외에</p>
          <p> 다른 지적 생명체가 존재한다고 생각한다.</p>
        </QuestionWrapper>
      </div>
      <ButtonWrapper>
        <AButton content="> YES" />
      </ButtonWrapper>
      <ButtonWrapper>
        <AButton content="> NO" />
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
