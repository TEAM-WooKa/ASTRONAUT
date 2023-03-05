import styled from 'styled-components';

function Title() {
  return <Wrapper>result</Wrapper>;
}

const Wrapper = styled.div`
  font-family: 'Space Rave';
  font-style: italic;
  font-size: 28px;
  line-height: 26px;
  /* identical to box height, or 93% */

  /* 1 */

  background: linear-gradient(
    198.52deg,
    #feac5e 4.12%,
    #c779d0 46.97%,
    #4bc0c8 87.46%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  /* 보조 컬러 2 */

  /* border: 2.7px solid #f1f1f1; */

  -webkit-text-stroke: 2px #f1f1f1;
`;
export default Title;
