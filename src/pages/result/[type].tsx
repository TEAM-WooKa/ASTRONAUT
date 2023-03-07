import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import withLayout from '@/component/hoc/withLayout';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import IDCard, { CardDataType } from '@/component/result/IDCard';
import { GetServerSidePropsContext } from 'next';
import { checkKakao, Mobile } from '@/utils/device';
import Content from '@/component/result/content';
import { getStorage } from '@/utils/storage';
import {
  calcCharacter,
  CharacterColorType,
  CharacterType,
} from '@/utils/answer';
import { downloadImage, getImageUrl } from '@/utils/image';
import Image from 'next/image';

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
  const { name, birth, whatILike, goal, color, char } = context.query;

  const { name: characterName, image: characterImage } = calcCharacter({
    color: color as CharacterColorType,
    char: char as CharacterType,
  });

  return {
    props: {
      cardData: {
        name: name ?? '데이터가 없습니다',
        birth: birth ?? '데이터가 없습니다',
        whatILike: whatILike ?? '데이터가 없습니다',
        goal: goal ?? '데이터가 없습니다',
        image: null,
      },
      character: {
        name: characterName ?? 'Yellow_Lomi',
        image: characterImage ?? '/characters/lumi.png',
      },
    },
  };
}

interface ResultProps {
  cardData: CardDataType;
  character: {
    name: string;
    image: string;
  };
}

function Result({ cardData, character }: ResultProps) {
  const cardRef = useRef(null);
  const router = useRouter();
  const [image, setImage] = useState(cardData.image);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownloadImage = async () => {
    setIsLoading(true);

    if (checkKakao() || Mobile()) {
      setTimeout(async () => {
        const imageUrl = await getImageUrl(cardRef);
        console.log('imageUrl: ', imageUrl);
        if (imageUrl) {
          localStorage.setItem('card-image', imageUrl);

          router.push({
            pathname: '/result/img',
            query: { image: imageUrl },
          });
        }

        setIsLoading(false);
        return;
      }, 1000);
    }
    await downloadImage(cardRef);
    setIsLoading(false);
  };

  const onDownloadBtn = () => {
    handleDownloadImage();
  };

  useEffect(() => {
    const image = getImagedata();
    setImage(image);
    setIsLoading(false);
  }, []);

  return (
    <>
      <h1>
        {/* TODO : logo 분리 */}
        <img
          src={'/images/logos/logo-aics.png'}
          width={236}
          height={62}
          alt="result"
        />
      </h1>
      <IDCard
        cardRef={cardRef}
        cardData={{ ...cardData, image }}
        character={character}
      />
      <ShareWrapper>
        <span onClick={onDownloadBtn}>
          {isLoading ? (
            <Image
              src="/images/pink-loading.svg"
              alt="loading"
              width={38}
              height={38}
            />
          ) : (
            <DownloadIcon />
          )}
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
