import type { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { CardDataType } from '@/component/result/IDCard';
import CardTop from '@/component/result/IDCard/common/card-top';
import LeftBox from '@/component/result/IDCard/front/left-box';
import RightBox from '@/component/result/IDCard/front/right-box';
import type { CharacterReturnType } from '@/types/character';

interface FrontProps extends CardDataType {
  character: CharacterReturnType;
}
export default function Front({
  name,
  birth,
  whatILike,
  goal,
  image,
  character,
}: FrontProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
  };

  useEffect(() => {
    setImageError(image ? false : true);
  }, [image]);

  return (
    <InnerFace>
      <CardTop />
      <CardInner>
        <LeftBox
          image={image}
          character={character}
          handleImageError={handleImageError}
          isError={imageError}
        />
        <RightBox name={name} birth={birth} whatILike={whatILike} goal={goal} />
      </CardInner>
    </InnerFace>
  );
}

const CardInner = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;

  height: 120px;
`;

const InnerFace = styled.div`
  padding: 11px 18px;

  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-wrap: wrap;
`;
