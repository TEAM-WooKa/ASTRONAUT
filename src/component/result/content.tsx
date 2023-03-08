import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import styled from 'styled-components';
const DUMMY = [
  ' 당신은 ㅇㅇ한 별 출신일지도??',
  'ㅇㅇ하고 ㅇㅇ한 사람, 가끔은 ㅇㅇ한  공상에 빠져 시간 가는 줄 모른적 있지  않나요? ',
];

function Content() {
  return (
    <>
      <img
        src={'/images/logos/logo-result.png'}
        width={122}
        height={39}
        alt="result"
      />
      <GradientBorderBox>
        <ContentWrapper>
          <TextWrapper>
            {DUMMY.map((text) => (
              <div key={text}>{text}</div>
            ))}
          </TextWrapper>
          <TextWrapper>친구별 : ㅇㅇ별 </TextWrapper>
          <TextWrapper>라이벌 : ㅇㅇ별 </TextWrapper>
        </ContentWrapper>
      </GradientBorderBox>
    </>
  );
}

const ContentWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const TextWrapper = styled(AText)`
  font-size: 18px;
  font-weight: 600;

  color: ${(props) => props.theme.colors.bg};
  text-align: left;
`;

export default Content;
