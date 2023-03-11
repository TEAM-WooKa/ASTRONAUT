import { FlexColumn } from '@/component/core/Flex';
import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';
import { CharacterReturnType } from '@/utils/answer';
import {
  PURPLE_LUMY,
  GREEN_LUMY,
  YELLOW_LUMY,
  GREEN_LANNY,
  PURPLE_LANNY,
  YELLOW_LANNY,
  CHEE_CAT,
  DA_CAT,
} from '@/utils/character';
import { ReactNode } from 'react';
import styled from 'styled-components';

export default function Back({
  character,
}: {
  character: CharacterReturnType;
}) {
  return (
    <>
      <CardTop />
      <CardMiddle character={character}>
        <FlexColumn gap="1">{characterContents[character.name]}</FlexColumn>
      </CardMiddle>
      <CardBottom />
    </>
  );
}

const TextWrapper = styled.p`
  /* TODO : font core 만들기 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.main2};
  position: relative;
  margin-left: 10px;

  &::before {
    content: '';
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: 7px;
    display: inline-block;
    background: ${({ theme }) => theme.colors.main2};
  }
`;

const LANNY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>래니</b>입니다
    </TextWrapper>
    <TextWrapper>
      래니는 우주 어딘가에 존재하는 지구를 닮은 행성입니다.
    </TextWrapper>
    <TextWrapper>
      이상과 현실 사이를 넘나들며 멋지게 조율하는 우주인님은 <b>래니</b>에서
      오셨네요!
    </TextWrapper>
  </>
);

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
