import type { SyntheticEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

import { FlexCenter } from '@/component/core/Flex';
import CharacterProfile from '@/component/result/IDCard/common/character-profile';
import {
  CoverImage,
  ProfileTagContainerStyled,
  ProfileTagStyled,
} from '@/component/result/IDCard/styles';
import type { CharacterReturnType } from '@/utils/answer';

interface LeftBoxProps {
  character: CharacterReturnType;
  isError: boolean;
  image: string;
  handleImageError: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function LeftBox({
  image,
  handleImageError,
  character,
  isError,
}: LeftBoxProps) {
  if (isError) {
    return <CharacterProfile character={character} />;
  }

  return (
    <Wrapper>
      <TopWrapper>
        <ImageWrapper>
          <CharacterImageWrapper>
            <CoverImage
              src={character.image}
              width="60"
              height="48"
              alt="image"
            />
          </CharacterImageWrapper>
          <ImageInnerWrapper>
            <CoverImage
              src={image}
              width="90"
              height="120"
              alt="user"
              onError={handleImageError}
            />
          </ImageInnerWrapper>
          <Star1>
            <CoverImage
              src="/images/star.png"
              width="27.64px"
              height="27.64px"
              alt="star"
            />
          </Star1>
          <Star2>
            <CoverImage
              src="/images/star.png"
              width="18.43px"
              height="18.43px"
              alt="star"
            />
          </Star2>
        </ImageWrapper>
      </TopWrapper>
      <ProfileTagContainerStyled>
        <ProfileTagStyled>{character.name}</ProfileTagStyled>
      </ProfileTagContainerStyled>
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

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CharacterMainImageWrapper = styled(FlexCenter)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sub2};
`;
