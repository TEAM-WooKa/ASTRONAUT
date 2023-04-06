import styled from 'styled-components';

export const InfoBoxContainerStyled = styled.div`
  padding: 12px 10px;

  display: flex;
  flex-direction: column;
  height: 120px;

  gap: 1px;

  background: ${(props) => props.theme.colors.sub2};
  color: ${(props) => props.theme.colors.main2};
  border-radius: 16px;
`;
