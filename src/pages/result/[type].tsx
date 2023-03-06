import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import IDCard, { CardDataType } from '@/component/result/IDCard';
import { toPng } from 'html-to-image';
import { GetServerSidePropsContext } from 'next';
import { checkKakao, Mobile } from '@/utils/device';
import Content from '@/component/result/content';
import { getStorage } from '@/utils/storage';

const getImagedata = () => {
  const data = getStorage('user');
  if (data === null) return null;

  const { image } = JSON.parse(data);
  if (image) {
    return image;
  }
  return null;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name, birth, whatILike, goal } = context.query;

  return {
    props: {
      cardData: {
        name: name ?? '데이터가 없습니다',
        birth: birth ?? '데이터가 없습니다',
        whatILike: whatILike ?? '데이터가 없습니다',
        goal: goal ?? '데이터가 없습니다',
        image: null,
      },
    },
  };
}

const downloadImage = (ref: MutableRefObject<HTMLElement | null>) => {
  if (!ref.current) return;

  try {
    toPng(ref.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        console.log('dataUrl: ', dataUrl);
        link.click();
      })
      .catch((error) => {
        console.error('Failed to generate PNG image:', error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getImageUrl = async (
  ref: MutableRefObject<HTMLElement | null>,
) => {
  if (!ref.current) return null;

  // NOTE: to png fmf
  try {
    const dataUrl = await toPng(ref.current);

    const res = await fetch(dataUrl);
    const blob = await res.blob();
    console.log('blob: ', blob);
    // 로컬 스토리지에 Blob 저장
    const imageUrl = URL.createObjectURL(blob); // Blob 데이터를 이미지 URL로 변환
    return imageUrl;
  } catch (error) {
    console.error('HTML to Image conversion failed', error);
  }
};

function Result({ cardData }: { cardData: CardDataType }) {
  const cardRef = useRef(null);
  const router = useRouter();
  const [image, setImage] = useState(cardData.image);
  const [isLoading, setIsLoading] = useState(false);
  const [testImg, setTestImg] = useState('');

  const handleDownloadImage = async () => {
    if (checkKakao() || Mobile()) {
      console.log('mobile');
      const imageUrl = await getImageUrl(cardRef);
      console.log('imageUrl: ', imageUrl);
      if (imageUrl) {
        localStorage.setItem('card-image', imageUrl);

        router.push({
          pathname: '/result/img',
          query: { image: imageUrl },
        });
      }
      return;
    }

    downloadImage(cardRef);
  };

  const onDownloadBtn = () => {
    handleDownloadImage();
  };

  useEffect(() => {
    setIsLoading(true);
    const image = getImagedata();
    setImage(image);
    setIsLoading(false);
  }, []);

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
      {testImg ? <img src={testImg} /> : null}
      <IDCard cardRef={cardRef} cardData={{ ...cardData, image }} />
      <ShareWrapper>
        <span onClick={onDownloadBtn}>
          <DownloadIcon />
        </span>
        <ShareIcon />
        <ReplayIcon />
      </ShareWrapper>
      <Content />
    </>
  );
}

const ShareWrapper = styled.div`
  display: flex;
  margin: 35px 0 20px;
  gap: 75px;
  justify-content: center;
`;

export default withLayout(Result, '우주인 결과', '우주인 테스트 결과 페이지');
