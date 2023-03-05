import styled from 'styled-components';

export default function CardTop() {
  return (
    <>
      <TopWrapper>
        <h1>astronaut id card </h1>
        <span>NO. 00000001</span>
      </TopWrapper>
    </>
  );
}

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;

  h1 {
    font-family: 'Space Rave';
    font-style: italic;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    min-width: 228px;

    background: linear-gradient(
      198.52deg,
      rgba(254, 172, 94, 0.9) 4.12%,
      rgba(199, 121, 208, 0.9) 87.46%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    /* 주색 2번 */

    color: ${(props) => props.theme.colors.main2};
    opacity: 0.8;

    position: relative;
    top: -3px;
  }
`;
