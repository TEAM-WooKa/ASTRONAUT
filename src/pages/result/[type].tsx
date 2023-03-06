import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import AText from '@/component/common/AText';
import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { MutableRefObject, useRef } from 'react';
import styled from 'styled-components';
import IDCard, { CardDataType } from '@/component/result/IDCard';
import { toPng } from 'html-to-image';
import { GetServerSidePropsContext } from 'next';
import { checkKakao } from '@/utils/device';
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
  const image = getImagedata();

  return {
    props: {
      cardData: {
        name: name ?? '데이터가 없습니다',
        birth: birth ?? '데이터가 없습니다',
        whatILike: whatILike ?? '데이터가 없습니다',
        goal: goal ?? '데이터가 없습니다',
        image: image ?? null,
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
        link.click();
      })
      .catch((error) => {
        console.error('Failed to generate PNG image:', error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getImageUrl = (
  ref: MutableRefObject<HTMLElement | null>,
): string | null => {
  if (!ref.current) return null;

  try {
    toPng(ref.current)
      .then((dataUrl) => {
        return dataUrl;
      })
      .catch((error) => {
        console.error('Failed to generate PNG image:', error);
      });
  } catch (error) {
    console.log(error);
  } finally {
    return null;
  }
};

function Result({ cardData }: { cardData: CardDataType }) {
  const cardRef = useRef(null);

  const handleDownloadImage = async () => {
    if (checkKakao()) return;

    downloadImage(cardRef);
  };
  const onDownloadBtn = () => {
    handleDownloadImage();
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
      <IDCard cardRef={cardRef} cardData={cardData} />
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
