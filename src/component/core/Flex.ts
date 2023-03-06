import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled.div<{ gap?: number | string }>`
  display: flex;
  flex-direction: column;

  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const FullCenter = styled(FlexCenter)`
  width: 100%;
  height: 100%;
`;
