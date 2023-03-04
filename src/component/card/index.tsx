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
      <Front className="front">
        <Image src="/space-image.png" width="123" height="113" alt="img" />
        <TextWrapper>
          <div>이름 : {name}</div>
          <div>생년월일 : {birth}</div>
          <div>취미 : {hobby}</div>
        </TextWrapper>
      </Front>
      <Back className="back">back</Back>
    </Card>
  );
}

const Card = styled.div`
  height: 220px;
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

const Face = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-color: ${(props) => props.theme.colors.main1};
  border-radius: 16px;

  display: flex;
  gap: 30px;
  padding: 20px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 2s ease;
`;

const Front = styled(Face)`
  z-index: 1;
`;
const Back = styled(Face)`
  z-index: 0;
`;

const TextWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default IDCard;
