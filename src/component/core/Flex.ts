import styled from 'styled-components';

export const Flex = styled.div<{ gap?: number | string }>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const FlexColumn = styled.div<{ gap?: number | string }>`
  display: flex;
  flex-direction: column;

  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

export const FlexJustifyBetween = styled(Flex)`
  justify-content: space-between;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullCenter = styled(FlexCenter)`
  width: 100%;
  height: 100%;
`;
