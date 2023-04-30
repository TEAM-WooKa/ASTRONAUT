import styled from 'styled-components';

import CircleCheckIcon from '@/assets/icons/CircleCheckIcon';
import GradientBorderBox from '@/component/common/GradientBorderBox';

function Notice() {
  return (
    <Wrapper>
      <Heading>
        {/* Note : 폰트가 적용이 안되서, svg로 대체 */}
        <svg
          width="94"
          height="20"
          viewBox="0 0 94 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66406 6.32812C4.63932 2.68229 6.94987 0.859375 10.5957 0.859375H16.0645C19.7103 0.859375 21.0456 2.68229 20.0703 6.32812L16.4062 20H9.57031L13.2344 6.32812H3.66406ZM10.1309 7.69531L6.83594 20H0L3.29492 7.69531H10.1309ZM21.4375 6.32812C22.4128 2.68229 24.7233 0.859375 28.3691 0.859375H33.8379C37.4837 0.859375 38.819 2.68229 37.8438 6.32812L35.6426 14.5312C34.6673 18.1771 32.3568 20 28.7109 20H23.2422C19.5964 20 18.2611 18.1771 19.2363 14.5312L21.0684 7.69531H27.9043L26.0723 14.5312H28.8066L31.0078 6.32812H21.4375ZM39.2109 6.32812L40.6738 0.859375H55.7129L54.25 6.32812H39.2109ZM49.7793 7.69531L46.4844 20H39.6484L42.9434 7.69531H49.7793ZM55.6172 6.32812L57.0801 0.859375H63.916L62.4531 6.32812H55.6172ZM62.084 7.69531L58.7891 20H51.9531L55.248 7.69531H62.084ZM63.8203 6.32812C64.7956 2.68229 67.1061 0.859375 70.752 0.859375H78.9551L77.4922 6.32812H63.8203ZM70.2871 7.69531L68.4551 14.5312H75.291L73.8281 20H65.625C61.9792 20 60.6439 18.1771 61.6191 14.5312L63.4512 7.69531H70.2871ZM78.8594 6.32812L80.3223 0.859375H93.9941L92.5312 6.32812H78.8594ZM89.4277 7.69531L87.9648 13.1641H83.8633L83.4941 14.5312H90.3301L88.8672 20H75.1953L78.4902 7.69531H89.4277Z"
            fill="#D082BE"
          />
        </svg>
      </Heading>
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
