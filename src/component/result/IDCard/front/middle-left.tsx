/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

import { FlexCenter } from '@/component/core/Flex';
import type { CharacterReturnType } from '@/utils/answer';

export default function MiddleLeft({
  character,
}: {
  character: CharacterReturnType;
}) {
  return (
    <CharacterWrapper>
      <CharacterMainImageWrapper>
        <img src={character.image} width="90" height="68" alt="character" />
      </CharacterMainImageWrapper>
      <BottomWrapper>
        <Tag>{character.name}</Tag>
      </BottomWrapper>
    </CharacterWrapper>
  );
}

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
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

const CharacterMainImageWrapper = styled(FlexCenter)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sub2};
`;
