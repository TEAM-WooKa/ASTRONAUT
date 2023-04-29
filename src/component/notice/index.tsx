import styled from 'styled-components';

import CircleCheckIcon from '@/assets/icons/CircleCheckIcon';
import GradientBorderBox from '@/component/common/GradientBorderBox';

function Notice() {
  return (
    <Wrapper>
      <Heading>Notice</Heading>
      <GradientBorderBox>
        <Title>
          <CircleCheckIcon />
          우주인 아이디 카드 서비스
        </Title>
        <ContentWrapper>
          <ContentItem>
            <span>1.</span>
            <p>
              우주인 아이디 카드 서비스는 &#39;빅 히스토리&#39; 우주론을
              바탕으로, 우리는 모두 별에서 온 별의 자손들이라는 아이디어에서
              시작되었습니다.
            </p>
          </ContentItem>
          <ContentItem>
            <span>2.</span>
            <p>
              아이디 카드를 발급한 우주인님은 고향별로 향하는 우주선에 탑승할 수
              있습니다!
            </p>
          </ContentItem>
          <ContentItem>
            <span>3.</span>
            <p>
              고향별은 우주인님의 지구별 여행을 응원하고 있답니다. 지구별에서
              행복한 시간 보내시길 바라요!
            </p>
          </ContentItem>
        </ContentWrapper>
      </GradientBorderBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 363px;
`;

const ContentWrapper = styled.div`
  padding: 0px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h2`
  font-family: 'Space Rave';
  font-style: italic;
  font-weight: 400;
  font-size: 28px;
  line-height: 26px;

  color: #d082be;

  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;

  color: #40424a;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  margin: 9px auto 9px;
  display: inline-flex;
`;

const ContentItem = styled.div`
  display: flex;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  /* 4 */

  color: #40424a;

  span {
    width: 20px;
  }

  p {
    flex: 1;
    text-align: left;
  }
`;
export default Notice;
