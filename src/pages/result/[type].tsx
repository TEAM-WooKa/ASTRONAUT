/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import IconBox from '@/component/result/icon-box';
import IDCard from '@/component/result/IDCard';
import type { IDCardTextInfo } from '@/component/result/IDCard/types';
import withLayout from '@/hoc/withLayout';
import type { CharacterColorType, CharacterType } from '@/types/character';
import { getCharacterImageUrl } from '@/utils/character/image';
import { checkKakao, Mobile } from '@/utils/device';
import { downloadImage, getImageUrl } from '@/utils/image';
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

type queryType = string | string[] | undefined;
const getData = ({
  name,
  birth,
  whatILike,
  goal,
  color,
  char,
}: {
  name: queryType;
  birth: queryType;
  whatILike: queryType;
  goal: queryType;
  color: queryType;
  char: queryType;
}): ResultProps => {
  const { name: characterName, image: characterImage } = getCharacterImageUrl({
    color: color as CharacterColorType,
    char: char as CharacterType,
  });

  return {
    cardData: {
      name: (name as string) ?? '데이터가 없습니다',
      birth: (birth as string) ?? '데이터가 없습니다',
      whatILike: (whatILike as string) ?? '데이터가 없습니다',
      goal: (goal as string) ?? '데이터가 없습니다',
    },
    character: {
      name: characterName ?? 'Purple_Lumi',
      image: characterImage ?? `/characters/lumi.png`,
    },
  };
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { name, birth, whatILike, goal, color, char } = context.query;

//   const { name: characterName, image: characterImage } = calcCharacter({
//     color: color as CharacterColorType,
//     char: char as CharacterType,
//   });

//   return {
//     props: {
//       cardData: {
//         name: name ?? '데이터가 없습니다',
//         birth: birth ?? '데이터가 없습니다',
//         whatILike: whatILike ?? '데이터가 없습니다',
//         goal: goal ?? '데이터가 없습니다',
//         image: null,
//       },
//       character: {
//         name: characterName ?? 'Yellow_Lomi',
//         image: characterImage ?? '/characters/lumi.png',
//       },
//     },
//   };
// }

interface ResultProps {
  cardData: IDCardTextInfo;
  character: {
    name: string;
    image: string;
  };
}

function Result() {
  const router = useRouter();
  const { name, birth, whatILike, goal, color, char } = router.query;
  const { cardData, character } = getData({
    name,
    birth,
    whatILike,
    goal,
    color,
    char,
  });

  const cardRef = useRef(null);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownloadImage = async () => {
    setIsLoading(true);

    if (checkKakao() || Mobile()) {
      window.alert('모바일 환경에서는 다운로드가 원활하지 않을 수 있습니다. ');
      setTimeout(async () => {
        const imageUrl = await getImageUrl(cardRef);
        if (imageUrl) {
          localStorage.setItem('card-image', imageUrl);

          router.push({
            pathname: '/result/img',
            query: { image: imageUrl },
          });
        }

        setIsLoading(false);
      }, 1000);
      return;
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
      <Heading>
        {/* TODO : logo 분리 */}
        <img
          src={'/images/logos/logo-aics.png'}
          width={236}
          height={62}
          alt="result"
        />
      </Heading>
      <IDCard
        cardRef={cardRef}
        cardData={{ ...cardData, image: image ?? '' }}
        character={character}
      />
      <IconBox isLoading={isLoading} onDownloadBtn={onDownloadBtn} />
      {/* <Content /> */}
    </>
  );
}

const Heading = styled.h1`
  margin-bottom: 35px;
`;
export default withLayout(Result, '우주인 결과', '우주인 테스트 결과 페이지');
