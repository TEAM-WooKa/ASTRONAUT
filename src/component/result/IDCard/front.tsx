import { CardDataType } from '@/component/result/IDCard';
import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import UserMiddle from '@/component/result/IDCard/card-middle/user-middle';
import CardTop from '@/component/result/IDCard/card-top';
import { CharacterReturnType } from '@/utils/answer';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

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
    e.currentTarget.src = '/character/yellow_lumy.png';
    setImageError(true);
  };

  useEffect(() => {
    setImageError(image ? false : true);
  }, [image]);

  return (
    <InnerFace>
      <CardTop />
      {image || !imageError ? (
        <UserMiddle image={image} character={character}>
          <MiddleInner
            name={name}
            birth={birth}
            whatILike={whatILike}
            goal={goal}
          />
        </UserMiddle>
      ) : (
        <CardMiddle
          image={image}
          character={character}
          handleImageError={handleImageError}
          imageError={imageError}
        >
          <MiddleInner
            name={name}
            birth={birth}
            whatILike={whatILike}
            goal={goal}
          />
        </CardMiddle>
      )}

      <CardBottom star={!imageError ? character.name : undefined} />
    </InnerFace>
  );
}

interface MiddleInnerProps {
  name?: string;
  birth?: string;
  whatILike?: string;
  goal?: string;
}
function MiddleInner({ name, birth, whatILike, goal }: MiddleInnerProps) {
  return (
    <FrontTextWrapper>
      <div>
        <span>NAME :</span> <span>{name ?? '데이터가 없습니다'}</span>
      </div>
      <div>
        <span>BIRTH DATE :</span>
        <span>{birth ?? '데이터가 없습니다'}</span>
      </div>
      <div>
        <span>LINING IN :</span> <span>{'지구별'}</span>
      </div>
      <div>
        <span>WAHT I LIKE :</span>
        <span>{whatILike ?? '데이터가 없습니다'}</span>
      </div>
      <div>
        <span>GOAL :</span> <span>{goal ?? '데이터가 없습니다'}</span>
      </div>
    </FrontTextWrapper>
  );
}
const InnerFace = styled.div`
  padding: 11px 18px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
`;

const FrontTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  color: ${(props) => props.theme.colors.main2};
  font-family: 'GongGothicMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  div {
    border-bottom: 0.1px solid #343232;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
