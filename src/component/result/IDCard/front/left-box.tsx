import type { SyntheticEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

import type { CharacterReturnType } from '@/utils/answer';

interface LeftBoxProps {
  character: CharacterReturnType;

  image: string;
  handleImageError: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function LeftBox({
  image,
  handleImageError,
  character,
}: LeftBoxProps) {
  return (
    <Wrapper>
      <TopWrapper>
        <ImageWrapper>
          <CharacterImageWrapper>
            <Img src={character.image} width="60" height="48" alt="image" />
          </CharacterImageWrapper>
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
      </TopWrapper>
      <BottomWrapper>
        <Tag>{character.name}</Tag>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90px;
  min-width: 90px;
  overflow: visible;
`;
const TopWrapper = styled.div`
  height: 120px;
`;

const BottomWrapper = styled.div`
  margin-top: 8px;
  height: 20px;
  position: relative;
`;

const Tag = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: fit-content;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;
  padding: 0 5px;
  line-height: 20px;

  color: ${(props) => props.theme.colors.main2};
  background: ${(props) => props.theme.colors.sub2};
  border-radius: 10px;
`;

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

const ImageWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 120px;
  border-radius: 16px;
  min-width: 90px;
`;

const CharacterImageWrapper = styled.div`
  position: absolute;
  bottom: -14px;
  right: -15px;
  z-index: 1;

  img {
    height: 100%;
  }
`;
