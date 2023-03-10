import { FlexColumn } from '@/component/core/Flex';
import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';
import { CharacterReturnType } from '@/utils/answer';
import { ReactNode } from 'react';
import styled from 'styled-components';

export default function Back({
  character,
}: {
  character: CharacterReturnType;
}) {
  console.log('character.name: ', character.name);
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

// TODO :  b강조

const LUMY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>루미</b>입니다
    </TextWrapper>
    <TextWrapper>
      루미는 별이 태어나는 성간운으로 별이 탄생하는 근원적인 공간입니다.
    </TextWrapper>
    <TextWrapper>
      '우연한 순간들이 모여 지구별에서의 인연을 만들었듯 우주로 돌아가실 때,
      우주인님을 기다리고 있을 <b>루미</b>를 반겨주세요
    </TextWrapper>
  </>
);

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
  Purple_Lumy: LUMY,
  Green_Lumy: LUMY,
  Yellow_Lumy: LUMY,
  Purple_Lanny: LANNY,
  Green_Lanny: LANNY,
  Yellow_Lanny: LANNY,
  Da_Cat: (
    <>
      <TextWrapper>
        우주인님의 고향은 <b>다케</b>입니다
      </TextWrapper>
      <TextWrapper>
        다케는 과학자들도 발혀내지 못한 미확인 에너지로 구성되어있습니다.
      </TextWrapper>
      <TextWrapper>
        검은색 고양이처럼 알쏭달쏭한 매력의 당신은 과학으로도 밝혀내지 못한
        비밀을 지니셨네요!
      </TextWrapper>
    </>
  ),
  Chee_Cat: (
    <>
      <TextWrapper>
        우주인님의 고향은 <b>치케</b>입니다
      </TextWrapper>
      <TextWrapper>
        치케는 과학자들도 발혀내지 못한 미확인 에너지로 구성되어있습니다.
      </TextWrapper>
      <TextWrapper>
        치즈색 고양이처럼 알쏭달쏭한 매력의 당신은 과학으로도 밝혀내지 못한
        비밀을 지니셨네요!
      </TextWrapper>
    </>
  ),
};
