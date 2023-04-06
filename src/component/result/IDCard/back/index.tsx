import styled from 'styled-components';

import CardTop from '@/component/result/IDCard/common/card-top';
import CharacterInfoBox from '@/component/result/IDCard/common/character-info-box';
import CharacterProfile from '@/component/result/IDCard/common/character-profile';
import type { CharacterReturnType } from '@/types/character';

export default function Back({
  character,
}: {
  character: CharacterReturnType;
}) {
  return (
    <>
      <CardTop />
      <MiddleWrapper>
        <CharacterProfile character={character} />
        <CharacterInfoBox character={character} />
      </MiddleWrapper>

      <BottomWrapper>
        <Desc>
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
`;

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;

  height: 120px;
`;

const Desc = styled.div`
  font-weight: 300;
  font-size: 10px;

  transform: translate(12%, 0) scale(0.75);

  color: #343232;
  opacity: 0.8;

  p {
    text-overflow: ellipsis;
    white-space: pre;
    float: right;
  }
`;
