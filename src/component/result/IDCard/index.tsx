/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styled from 'styled-components';

import { GradientBoxStyled } from '@/assets/styles/gradient';
import { FullCenter } from '@/component/core/Flex';
import Back from '@/component/result/IDCard/back';
import Front from '@/component/result/IDCard/front';
import type { CharacterReturnType } from '@/utils/answer';

export interface CardDataType {
  name: string;
  birth: string;
  whatILike: string;
  goal: string;
  image: string;
}

interface IDCardProps {
  cardRef: any;
  cardData: CardDataType;
  character: CharacterReturnType;
}

export default function IDCard({ cardRef, cardData, character }: IDCardProps) {
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const onClick = () => {
    setIsRotate(!isRotate);
  };

  return (
    <Card onClick={onClick} className={isRotate ? 'rotate' : ''}>
      {isLoading && (
        <Face>
          <LoadingWrapper>
            <img
              src="/images/pink-loading.svg"
              width="50px"
              height="50px"
              alt="loading"
            />
          </LoadingWrapper>
        </Face>
      )}

      <FrontWrapper
        ref={!isRotate ? cardRef : null}
        className="front"
        id="dom-element"
      >
        <Front character={character} {...cardData} />
      </FrontWrapper>
      <BackWrapper ref={isRotate ? cardRef : null} className="back">
        <InnerFace>
          <Back character={character} />
        </InnerFace>
      </BackWrapper>
    </Card>
  );
}

const LoadingWrapper = styled(FullCenter)`
  position: absolute;
  background-color: #3c3c3c34;
  z-index: 10;
  border-radius: 13px;
`;

const Card = styled.div`
  width: 350px;
  margin: 10px auto;
  height: 220px; //? 수정 필요? 220px 으로
  perspective: 600px;
  position: relative;
  cursor: pointer;
  .front,
  .back {
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
  }
  .front {
    z-index: 1;
    transform: rotateY(0deg);
  }
  .back {
    z-index: 0;
    transform: rotateY(180deg);
  }
  &.rotate {
    .front {
      z-index: 0;
      transform: rotateY(-180deg);
    }
    .back {
      z-index: 1;
      transform: rotateY(0deg);
    }
  }
`;

const Face = styled(GradientBoxStyled)`
  border-radius: 16px;

  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      193deg,
      rgba(254, 172, 94, 1) 0%,
      rgba(199, 121, 208, 1) 50%,
      rgba(75, 192, 200, 1) 100%
    );

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 2s ease;
`;

const FrontWrapper = styled(Face)``;
const BackWrapper = styled(Face)``;

const InnerFace = styled.div`
  padding: 11px 18px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
`;
