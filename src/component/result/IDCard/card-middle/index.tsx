import styled from 'styled-components';
import RomiYellow from '@/assets/images/romi.jpg';
import RomiBox from '@/component/result/IDCard/card-middle/romi-box';
import { useState } from 'react';

interface CardMiddleProps {
  children: React.ReactNode;
  image?: string;
  handleImageError?: () => void;
  imageError?: boolean;
}

export default function CardMiddle({
  children,
  image,
  handleImageError,
  imageError,
}: CardMiddleProps) {
  if (imageError || !image) {
    return (
      <MiddleWrapper>
        <RomiBox />
        <TextWrapper>{children}</TextWrapper>
      </MiddleWrapper>
    );
  }

  return (
    <MiddleWrapper>
      <ImageWrapper>
        {/* // romi image */}
        <RomiImageWrapper>
          <img src="/images/romi.png" width="60" height="48" alt="image" />
        </RomiImageWrapper>
        <img
          src={image}
          width="90"
          height="120"
          alt="user"
          onError={handleImageError}
        />
      </ImageWrapper>
      <TextWrapper>{children}</TextWrapper>
    </MiddleWrapper>
  );
}

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;

  height: 120px;
`;

const TextWrapper = styled.div`
  padding: 12px 10px;
  flex: 1;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 120px;
  border-radius: 16px;
  min-width: 90px;
`;

const RomiImageWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;
`;
