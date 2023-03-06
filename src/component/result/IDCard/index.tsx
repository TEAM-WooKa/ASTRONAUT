import { GradientBoxStyled } from '@/assets/styles/gradient';
import Back from '@/component/result/IDCard/back';
import Front from '@/component/result/IDCard/front';
import { useState } from 'react';
import styled from 'styled-components';

export interface CardDataType {
  name: string;
  birth: string;
  whatILike: string;
  goal: string;
}

interface IDCardProps {
  cardRef: any;
  cardData: CardDataType;
}

export default function IDCard({ cardRef, cardData }: IDCardProps) {
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const onClick = () => {
    setIsRotate(!isRotate);
  };

  return (
    <Card onClick={onClick} className={isRotate ? 'rotate' : ''}>
      <FrontWrapper
        ref={!isRotate ? cardRef : null}
        className="front"
        id="dom-element"
      >
        <Front {...cardData} />
      </FrontWrapper>
      <BackWrapper ref={isRotate ? cardRef : null} className="back">
        <InnerFace>
          <Back />
        </InnerFace>
      </BackWrapper>
    </Card>
  );
}

const Card = styled.div`
  max-width: 350px;
  width: 350px;
  margin: 10px auto;
  height: 220px; //? 수정 필요? 220px 으로
  perspective: 600px;
  position: relative;
  cursor: pointer;

  .front,
  .back {
    transition: all 0.5s ease-in-out;
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

  gap: 30px;
  padding: 1px;

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
