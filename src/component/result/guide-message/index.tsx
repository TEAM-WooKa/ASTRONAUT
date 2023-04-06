import React from 'react';
import styled from 'styled-components';

import CircleCheckIcon from '@/assets/icons/CircleCheckIcon';
import XIcon from '@/assets/icons/XIcon';

export default function GuideMessage() {
  return (
    <Wrapper>
      <CircleCheckIcon />
      <Text>카드를 터치해 보세요!</Text>
      <XIcon color="#828282" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 225px;
  height: 51px;
  position: relative;

  background-image: url('/images/guide-message-container.svg');
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px 7px;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors[4]};
`;
