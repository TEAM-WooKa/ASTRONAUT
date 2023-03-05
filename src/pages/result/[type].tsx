import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import IDCard from '@/component/result/IDCard';

const DUMMY = [
  ' 당신은 ㅇㅇ한 별 출신일지도??',
  'ㅇㅇ하고 ㅇㅇ한 사람, 가끔은 ㅇㅇ한  공상에 빠져 시간 가는 줄 모른적 있지  않나요? ',
];

function Result() {
  const cardRef = useRef(null);

  const onDownloadBtn = () => {
    const card = cardRef.current;
    if (card === null) return;

    console.log('card: ', card);
    domtoimage.toBlob(card).then((blob) => {
      saveAs(blob, 'card.png');
    });
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
      <IDCard cardRef={cardRef} />

      <ShareWrapper>
        <span onClick={onDownloadBtn}>
          <DownloadIcon />
        </span>
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
