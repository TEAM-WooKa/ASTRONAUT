import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import styled from 'styled-components';
import IDCard from '@/component/result/IDCard';
import { toPng } from 'html-to-image';

const DUMMY = [
  ' 당신은 ㅇㅇ한 별 출신일지도??',
  'ㅇㅇ하고 ㅇㅇ한 사람, 가끔은 ㅇㅇ한  공상에 빠져 시간 가는 줄 모른적 있지  않나요? ',
];

function Result() {
  const cardRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  // function handleDownload() {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   // Set the canvas size to a higher resolution than the DOM element
  //   const domElement = document.getElementById('dom-element');
  //   if (!domElement) return;

  //   const scaleFactor = 2;
  //   canvas.width = domElement.offsetWidth * scaleFactor;
  //   canvas.height = domElement.offsetHeight * scaleFactor;
  //   ctx.scale(scaleFactor, scaleFactor);

  //   // Render the DOM element on the canvas
  //   ctx.drawImage(domElement as CanvasImageSource, 0, 0);

  //   // Convert the canvas to a Blob object
  //   canvas.toBlob((blob) => {
  //     // Create a download link and trigger a click on it
  //     const link = document.createElement('a');
  //     link.download = 'image.png';
  //     link.href = URL.createObjectURL(blob);
  //     link.click();
  //   }, 'image/png');
  // }

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    console.log('window.navigator.userAgent: ', window.navigator.userAgent);

    if (/KAKAOTALK/i.test(window.navigator.userAgent)) {
      // Open the link in a new window
      alert('카카오톡에서는 다운로드가 지원되지 않습니다.');
      window.open(router.asPath, '_blank');
      return;
    } else {
      // Open the link in the current window
      router.push(router.asPath);
    }

    console.log('cardRef.current: ', cardRef.current);
    try {
      toPng(cardRef.current)
        .then((dataUrl) => {
          // Create a download link and trigger a click on it
          const link = document.createElement('a');
          link.download = 'image.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Failed to generate PNG image:', error);
        });

      // await toBlob(cardRef.current).then((blob) => {
      //   const link = document.createElement('a');
      //   link.download = 'image.png';
      //   if (!blob) return;

      //   link.href = URL.createObjectURL(blob);

      //   link.click();
      // });
    } catch (error) {
      console.log(error);
    }
  };
  const onDownloadBtn = () => {
    handleDownloadImage();
    // const card = cardRef.current;
    // if (card === null) return;

    // console.log('card: ', card);
    // domtoimage.toBlob(card).then((blob) => {
    //   saveAs(blob, 'card.png');
    // });
  };

  return (
    <>
      <h1>
        <img
          src={'/images/logos/logo-aics.png'}
          width={236}
          height={62}
          alt="result"
        />
      </h1>
      <IDCard cardRef={cardRef} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <ShareWrapper>
        <span onClick={onDownloadBtn}>
          <DownloadIcon />
        </span>
        <ShareIcon />
        <ReplayIcon />
      </ShareWrapper>
      <img
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
