import React from 'react';
import styled from 'styled-components';

import { InfoBoxContainerStyled } from '@/component/result/IDCard/styles';
import type { IDCardTextInfo } from '@/component/result/IDCard/types';

export default function InfoBox({
  name,
  birth,
  whatILike,
  goal,
}: IDCardTextInfo) {
  return (
    <FrontTextWrapper>
      <div>
        <span>NAME :</span> <span>{name}</span>
      </div>
      <div>
        <span>BIRTH DATE :</span>
        <span>{birth}</span>
      </div>
      <div>
        <span>LINING IN :</span> <span>{'지구별'}</span>
      </div>
      <div>
        <span>WAHT I LIKE :</span>
        <span>{whatILike}</span>
      </div>
      <div>
        <span>GOAL :</span> <span>{goal}</span>
      </div>
    </FrontTextWrapper>
  );
}

const FrontTextWrapper = styled(InfoBoxContainerStyled)`
  align-items: flex-start;
  justify-content: space-between;

  font-family: 'GongGothicMedium';
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  div {
    border-bottom: 0.1px solid #343232;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
