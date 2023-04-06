/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

import { FlexCenter } from '@/component/core/Flex';
import {
  ContainImage,
  ProfileTagContainerStyled,
  ProfileTagStyled,
} from '@/component/result/IDCard/styles';
import type { CharacterReturnType } from '@/utils/answer';

export default function CharacterProfile({
  character,
}: {
  character: CharacterReturnType;
}) {
  return (
    <CharacterWrapper>
      <CharacterMainImageWrapper>
        <ContainImage
          src={character.image}
          width="90"
          height="68"
          alt="character"
        />
      </CharacterMainImageWrapper>
      <ProfileTagContainerStyled>
        <ProfileTagStyled>{character.name}</ProfileTagStyled>
      </ProfileTagContainerStyled>
    </CharacterWrapper>
  );
}

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
