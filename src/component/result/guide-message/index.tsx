import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CircleCheckIcon from '@/assets/icons/CircleCheckIcon';
import XIcon from '@/assets/icons/XIcon';
import GuideMessageSvg from '@/component/result/guide-message/guide-message-overlay';

export default function GuideMessage() {
  const [openTime, handleOpenTime] = useState(0);
  const [isShowMessage, setIsShowMessage] = useState(true);

  const handleCloseMessage = () => {
    setIsShowMessage(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleOpenTime((prev) => prev + 2);
    }, 50);

    if (openTime > 100) {
      clearInterval(timer);
      handleCloseMessage();
    }

    return () => {
      clearInterval(timer);
    };
  }, [openTime]);

  if (isShowMessage) {
    return (
      <Wrapper>
        <InnerWrapper>
          <CircleCheckIcon />
          <Text>카드를 터치해 보세요!</Text>
          <span onClick={handleCloseMessage}>
            <XIcon color="#828282" />
          </span>
        </InnerWrapper>
        <Overlay w={openTime}>
          <GuideMessageSvg />
        </Overlay>
      </Wrapper>
    );
  }
  return <></>;
}

const Wrapper = styled.div`
  width: 225px;
  height: 51px;
  position: relative;

  background-image: url('/images/guide-message-container.svg');
  background-repeat: no-repeat;
`;

const Overlay = styled.div<{ w: number }>`
  position: absolute;
  top: 0;
  width: ${({ w }) => w}%;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border-radius: 10px;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors[4]};
`;
