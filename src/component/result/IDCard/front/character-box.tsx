/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

import { FlexCenter } from '@/component/core/Flex';

interface CharacterBoxProps {
  image: string;
  name: string;
}

export default function CharacterBox({ image, name }: CharacterBoxProps) {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = '/characters/yellow_lumy.png';
  };

  return (
    <CharacterWrapper>
      <CharacterMainImageWrapper>
        <img
          src={image}
          width="90"
          height="68"
          alt="character"
          onError={handleImageError}
        />
      </CharacterMainImageWrapper>
      <Tag>{name}</Tag>
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

const Tag = styled.div`
  align-self: center;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;
  width: fit-content;
  padding: 0 5px;
  /* 주색 2번 */
  color: ${(props) => props.theme.colors.main2};
  line-height: 20px;

  /* 보조 컬러 2 */
  background: ${(props) => props.theme.colors.sub2};
  border-radius: 10px;
`;
