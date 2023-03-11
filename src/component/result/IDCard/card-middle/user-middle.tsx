import { CharacterReturnType } from '@/utils/answer';
import { SyntheticEvent } from 'react';
import styled from 'styled-components';
interface CardMiddleProps {
  children: React.ReactNode;
  character: CharacterReturnType;

  image?: string;
  handleImageError?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function UserMiddle({
  image,
  handleImageError,
  children,
  character,
}: CardMiddleProps) {
  return (
    <MiddleWrapper>
      <ImageWrapper>
        <RomiImageWrapper>
          <Img src={character.image} width="60" height="48" alt="image" />
        </RomiImageWrapper>
        <ImageInnerWrapper>
          <Img
            src={image}
            width="90"
            height="120"
            alt="user"
            onError={handleImageError}
          />
        </ImageInnerWrapper>
        <Star1>
          <Img
            src="/images/star.png"
            width="27.64px"
            height="27.64px"
            alt="star"
          />
        </Star1>
        <Star2>
          <Img
            src="/images/star.png"
            width="18.43px"
            height="18.43px"
            alt="star"
          />
        </Star2>
      </ImageWrapper>
      <TextWrapper>{children}</TextWrapper>
    </MiddleWrapper>
  );
}

const Star2 = styled.div`
  position: absolute;
  bottom: -10px;
  left: -6px;
`;

const Star1 = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
`;
const ImageInnerWrapper = styled.div`
  width: 90px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
`;

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;

  height: 120px;
`;

const TextWrapper = styled.div`
  padding: 12px 10px;
  flex: 1;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 120px;
  border-radius: 16px;
  min-width: 90px;
`;

const RomiImageWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;

  img {
    height: 100%;
  }
`;
