import { FlexColumn } from '@/component/core/Flex';
import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';
import { CharacterReturnType } from '@/utils/answer';
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
        <FlexColumn gap="1">
          <TextWrapper>
            우주인님의 고향은 <b>루미</b>입니다
          </TextWrapper>
          <TextWrapper>
            루미는 별이 태어나는 성간운으로 별이 탄생하는 근원적인 공간입니다.
          </TextWrapper>
          <TextWrapper>
            우연한 순간들이 모여 지구별에서의 인연을 만들었듯 우주로 돌아가실
            때, 우주인님을 기다리고 있을 <b>루미</b>를 반겨주세요
          </TextWrapper>
        </FlexColumn>
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
