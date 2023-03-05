import styled from 'styled-components';

export default function CardBottom() {
  return (
    <BottomWrapper>
      <Tag>FROM : Yellow_Lumy</Tag>
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

const Tag = styled.div`
  width: 115px;
  min-width: 115px;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;

  /* 주색 2번 */
  color: #343232;
  line-height: 20px;

  /* 보조 컬러 2 */
  background: #f1f1f1;
  border-radius: 10px;

  position: relative;
  left: -5px;
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
