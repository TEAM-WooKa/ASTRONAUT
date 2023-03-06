import styled from 'styled-components';

interface CardBottomProps {
  // isBack?: boolean;
  star?: string;
}
export default function CardBottom({ star }: CardBottomProps) {
  return (
    <BottomWrapper>
      <Tag isHidden={!star}>FROM : {star}</Tag>
      <Desc>
        <p>이 카드를 소지한 사람은 별에서 온 우주인임을 증명합니다.</p>
        <p> This card certifies the bearer as a astronaut.</p>
      </Desc>
    </BottomWrapper>
  );
}

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Tag = styled.div<{ isHidden: boolean }>`
  width: 123px;
  min-width: 123px;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;

  color: ${(props) => props.theme.colors.main2};
  line-height: 20px;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 10px;

  position: relative;
  left: -5px;

  visibility: ${(props) => (props.isHidden ? 'hidden' : 'visible')};
`;

const Desc = styled.div`
  /* width: 120%; */
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;
  transform: translate(-8%, -0%) scale(0.75);
  display: inline-block;
  text-align: right;
  color: #343232;
  opacity: 0.8;
  width: fit-content;
  p {
    width: fit-content;
    text-overflow: ellipsis;
    white-space: pre;
    float: right;
  }
`;
