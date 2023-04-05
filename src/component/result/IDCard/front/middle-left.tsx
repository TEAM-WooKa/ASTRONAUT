import styled from 'styled-components';

import CharacterBox from '@/component/result/IDCard/card-middle/character-box';
import type { CharacterReturnType } from '@/utils/answer';

export default function MiddleLeft({
  character = {
    name: 'Lomi',
    image: '/characters/yellow_lumy.png',
  },
}: {
  character: CharacterReturnType;
}) {
  return (
    <div>
      <CharacterBox name={character.name} image={character?.image} />
    </div>
  );
}

const TextWrapper = styled.div`
  padding: 12px 10px;
  flex: 1;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 16px;
`;
