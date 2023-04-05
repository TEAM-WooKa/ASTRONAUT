import React from 'react';
import styled from 'styled-components';

interface MiddleInnerProps {
  name?: string;
  birth?: string;
  whatILike?: string;
  goal?: string;
}

export default function MiddleRight({
  name,
  birth,
  whatILike,
  goal,
}: MiddleInnerProps) {
  return (
    <FrontTextWrapper>
      <div>
        <span>NAME :</span> <span>{name ?? '데이터가 없습니다'}</span>
      </div>
      <div>
        <span>BIRTH DATE :</span>
        <span>{birth ?? '데이터가 없습니다'}</span>
      </div>
      <div>
        <span>LINING IN :</span> <span>{'지구별'}</span>
      </div>
      <div>
        <span>WAHT I LIKE :</span>
        <span>{whatILike ?? '데이터가 없습니다'}</span>
      </div>
      <div>
        <span>GOAL :</span> <span>{goal ?? '데이터가 없습니다'}</span>
      </div>
    </FrontTextWrapper>
  );
}

const TextWrapper = styled.div`
  padding: 12px 10px;
  flex: 1;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 16px;
`;

const FrontTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  color: ${(props) => props.theme.colors.main2};
  font-family: 'GongGothicMedium';
  font-style: normal;
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
