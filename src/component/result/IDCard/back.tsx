import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FlexColumn } from '@/component/core/Flex';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';
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

export default function Back({
  character,
}: {
  character: CharacterReturnType;
}) {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    setIsChrome(/Chrome/i.test(window.navigator.userAgent));
  }, []);

  return (
    <>
      <CardTop />
      <CardMiddle character={character}>
        <FlexColumn gap="1">{characterContents[character.name]}</FlexColumn>
      </CardMiddle>
      <BottomWrapper>
        <TagWrapper></TagWrapper>
        <Desc isScale={isChrome}>
          <p>
            1. 이 카드의 소지자는 우주선 탑승 시 본 ID 카드를 제시해주시길
            바랍니다.
          </p>
          <p>
            2. 카드를 잃어버렸을 경우 우주인 아이디 카드 서비스를 통해 재발급
            받을 수 있습니다.
          </p>
        </Desc>
      </BottomWrapper>
    </>
  );
}

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  /* display: flex;
  flex-direction: row-reverse; */
`;

const TagWrapper = styled.div`
  width: 100%;
  min-width: 44px;
  text-align: center;
`;

const Desc = styled.div<{ isScale: boolean }>`
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;

  transform: ${(props) =>
    props.isScale ? 'translate(-8%, -0%) scale(0.75)' : ''};

  display: block;
  text-align: right;
  color: #343232;
  opacity: 0.8;
  width: fit-content;
  float: right;
  p {
    width: fit-content;
    text-overflow: ellipsis;
    white-space: pre;
    float: right;
  }
`;

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
