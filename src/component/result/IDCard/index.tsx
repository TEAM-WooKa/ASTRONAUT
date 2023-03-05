import { GradientBoxStyled } from '@/assets/styles/gradient';
import Front from '@/component/result/IDCard/front';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

interface IDCardProps {
  name: string;
  birth: string;
  hobby: string;
}
function IDCard({ name, birth, hobby }: IDCardProps) {
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const onClick = () => {
    setIsRotate(!isRotate);
  };

  return (
    <Card onClick={onClick} className={isRotate ? 'rotate' : ''}>
      <FrontWrapper className="front">
        <Front
          name={'name'}
          birth={''}
          liningIn={''}
          whatILike={''}
          goal={''}
        />
      </FrontWrapper>
      <Back className="back">
        <InnerFace>back</InnerFace>
      </Back>
    </Card>
  );
}

const Card = styled.div`
  max-width: 350px;
  margin: 10px auto;
  height: 220px; //? 수정 필요? 220px 으로
  perspective: 600px;
  position: relative;
  cursor: pointer;

  &.rotate {
    .front {
      transform: rotateY(-180deg); /*카드가 Y축을 기준으로 회전 -180도 회전*/
      transition: all 0.5s ease-in-out;
      z-index: 0; /*카드가 뒤집어지면 뒷면이 앞면보다 튀어나오게끔 z값을 낮춘다.*/
    }
    .back {
      transform: rotateY(-180deg); /*카드가 Y축을 기준으로 회전 -180도 회전*/
      transition: all 0.5s ease-in-out;
      z-index: 1; /*카드가 뒤집어지면 뒷면이 앞면보다 튀어나오게끔 z값을 높인다.*/
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

const FrontWrapper = styled(Face)`
  z-index: 1;
`;
const Back = styled(Face)`
  z-index: 0;
`;

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const InnerFace = styled.div`
  padding: 11px 18px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  font-family: 'GongGothicMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  padding: 12px 10px;
  /* identical to box height, or 120% */
  flex: 1;
  /* 보조 컬러 2 */

  background: #f1f1f1;
  border-radius: 16px;
  /* 주색 2번 */

  color: #343232;
  div {
    border-bottom: 0.1px solid #343232;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;

  h1 {
    font-family: 'Space Rave';
    font-style: italic;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    /* identical to box height, or 108% */
    min-width: 228px;
    background: linear-gradient(
      198.52deg,
      rgba(254, 172, 94, 0.9) 4.12%,
      rgba(199, 121, 208, 0.9) 87.46%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    /* 주색 2번 */

    color: #343232;
    opacity: 0.8;

    position: relative;
    top: -3px;
  }
`;

const FrontImageWrapper = styled.div`
  width: 90px;
  height: 120px;
  border-radius: 16px;
  min-width: 90px;
  position: relative;
  image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RomiImageWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Tag = styled.div`
  width: 115px;
  min-width: 115px;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;

  /* 주색 2번 */
  color: #343232;
  line-height: 20px;

  /* 보조 컬러 2 */
  background: #f1f1f1;
  border-radius: 10px;

  position: relative;
  left: -5px;
`;

const Desc = styled.div`
  /* width: 120%; */
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;
  transform: translate(-8%, -0%) scale(0.75);
  display: inline-block;
  text-align: right;
  color: #343232;
  opacity: 0.8;
  width: fit-content;
  p {
    width: fit-content;
    text-overflow: ellipsis;
    white-space: pre;
    float: right;
  }
`;

export default IDCard;
