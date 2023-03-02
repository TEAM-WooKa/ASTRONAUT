import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import AText from '@/component/common/AText';
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
          src={'/images/id_card_service.png'}
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
      <Content>
        <AstronautImage>
          <div>우주인 이미지</div>
        </AstronautImage>

        <ButtonWrapper>
          <Button>&gt; 공유하기</Button>
          <Button onClick={handleIDCardMakeClick}>&gt; ID 카드 만들기</Button>
        </ButtonWrapper>

        <TextWrapper>
          {DUMMY.map((text) => (
            <div key={text}>{text}</div>
          ))}
        </TextWrapper>
        <TextWrapper>친구별 : ㅇㅇ별 </TextWrapper>
        <TextWrapper>라이벌 : ㅇㅇ별 </TextWrapper>
      </Content>
    </>
  );
}

const ShareWrapper = styled.div`
  display: flex;
  margin: 35px 0;
  gap: 75px;
  justify-content: center;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.sub2};
  border: 2px solid ${(props) => props.theme.colors.sub3};
  border-radius: 16px;
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const TextWrapper = styled(AText)`
  color: #000;
  text-align: left;
`;

const AstronautImage = styled.div`
  background-color: ${(props) => props.theme.colors.sub3};
  position: relative;
  width: 100%;
  border-radius: 16px;

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }

  * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 20px;
  border-radius: 20px;
  flex: 1;
`;

export default withLayout(Result, '우주인 결과', '우주인 테스트 결과 페이지');
