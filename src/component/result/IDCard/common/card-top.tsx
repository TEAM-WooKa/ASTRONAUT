/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

export default function CardTop() {
  return (
    <>
      <TopWrapper>
        <img src="/images/id-card.png" alt="astronaut id card" />
        <span>NO. 00000001</span>
      </TopWrapper>
    </>
  );
}

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  img {
    width: 235px;
    height: 21px;
  }

  span {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;

    color: ${(props) => props.theme.colors.main2};
    opacity: 0.8;

    position: relative;
  }
`;
