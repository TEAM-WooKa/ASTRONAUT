import styled from 'styled-components';

import { AbsoluteForceHorizontalCenter } from '@/component/core/Position';

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

export const CoverImage = styled.img`
  object-fit: cover;
`;

export const ContainImage = styled.img`
  object-fit: contain;
`;

export const ProfileTagContainerStyled = styled.div`
  margin-top: 8px;
  height: 20px;
  position: relative;
`;
export const ProfileTagStyled = styled(AbsoluteForceHorizontalCenter)`
  border-radius: 10px;

  width: fit-content;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;
  padding: 0 5px;
  line-height: 20px;

  color: ${(props) => props.theme.colors.main2};
  background: ${(props) => props.theme.colors.sub2};
`;
