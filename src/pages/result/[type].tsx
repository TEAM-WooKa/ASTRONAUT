import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
import Card from '@/component/result/card';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const DUMMY = [
  ' 당신은 ㅇㅇ한 별 출신일지도??',
  'ㅇㅇ하고 ㅇㅇ한 사람, 가끔은 ㅇㅇ한  공상에 빠져 시간 가는 줄 모른적 있지  않나요? ',
];

function Result() {
  const router = useRouter();

  const handleIDCardMakeClick = () => {
    router.push('/result/card');
  };

  return (
    <>
      <h1>
        <Image
          src={'/images/logos/logo-aics.png'}
          width={236}
          height={62}
          alt="result"
        />
      </h1>
      <Card />

      <ShareWrapper>
        <DownloadIcon />
        <ShareIcon />
        <ReplayIcon />
      </ShareWrapper>
      <Image
        src={'/images/logos/logo-result.png'}
        width={122}
        height={39}
        alt="result"
      />
      <GradientBorderBox>
        <Content>
          <TextWrapper>
            {DUMMY.map((text) => (
              <div key={text}>{text}</div>
            ))}
          </TextWrapper>
          <TextWrapper>친구별 : ㅇㅇ별 </TextWrapper>
          <TextWrapper>라이벌 : ㅇㅇ별 </TextWrapper>
        </Content>
      </GradientBorderBox>
    </>
  );
}

const ShareWrapper = styled.div`
  display: flex;
  margin: 35px 0 20px;
  gap: 75px;
  justify-content: center;
`;

const Content = styled.div`
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

export default withLayout(Result, '우주인 결과', '우주인 테스트 결과 페이지');
