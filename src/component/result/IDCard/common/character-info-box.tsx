import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

import { InfoBoxContainerStyled } from '@/component/result/IDCard/styles';
import type { CharacterReturnType } from '@/utils/answer';
import {
  CHEE_CAT,
  DA_CAT,
  GREEN_LANNY,
  GREEN_LUMY,
  PURPLE_LANNY,
  PURPLE_LUMY,
  YELLOW_LANNY,
  YELLOW_LUMY,
} from '@/utils/character';

export default function CharacterInfoBox({
  character,
}: {
  character: CharacterReturnType;
}) {
  return <TextWrapper>{characterContents[character.name]}</TextWrapper>;
}

const TextWrapper = styled(InfoBoxContainerStyled)``;

const characterContents: Record<string, ReactNode> = {
  Purple_Lumy: PURPLE_LUMY,
  Green_Lumy: GREEN_LUMY,
  Yellow_Lumy: YELLOW_LUMY,
  Purple_Lanny: PURPLE_LANNY,
  Green_Lanny: GREEN_LANNY,
  Yellow_Lanny: YELLOW_LANNY,
  Da_Cat: DA_CAT,
  Chee_Cat: CHEE_CAT,
};
