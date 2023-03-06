import styled from 'styled-components';
import Image from 'next/image';
import { FlexCenter } from '@/component/common/Flex';

import RomiYellow from '@/assets/images/romi.jpg';

interface CardMiddleProps {
  children: React.ReactNode;
  image: string;
  subImage?: string;
  type?: 'romi' | 'user';
}

export default function CardMiddle({
  children,
  subImage,
  image,
  type = 'user',
}: CardMiddleProps) {
  if (type === 'romi') {
    return (
      <MiddleWrapper>
        <RomiWrapper>
          <RomiMainImageWrapper>
            <img src={image} width="90" height="68" alt="romi" />
          </RomiMainImageWrapper>
          <Tag>Yellow_Lumy</Tag>
        </RomiWrapper>
        <TextWrapper>{children}</TextWrapper>
      </MiddleWrapper>
    );
  }
  return (
    <MiddleWrapper>
      <ImageWrapper>
        {subImage && (
          <RomiImageWrapper>
            <img src={subImage} width="60" height="48" alt="image" />
          </RomiImageWrapper>
        )}
        <img src={image} width="90" height="120" alt="user" />
      </ImageWrapper>
      <TextWrapper>{children}</TextWrapper>
    </MiddleWrapper>
  );
}

const MiddleWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const TextWrapper = styled.div`
  padding: 12px 10px;
  flex: 1;

  background: ${(props) => props.theme.colors.sub2};
  border-radius: 16px;
`;

const ImageWrapper = styled.div`
  width: 90px;
  height: 120px;
  border-radius: 16px;
  min-width: 90px;
  position: relative;
`;

const RomiImageWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;
`;

const RomiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const RomiMainImageWrapper = styled(FlexCenter)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sub2};
`;

const Tag = styled.div`
  align-self: center;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;
  width: fit-content;
  padding: 0 5px;
  /* 주색 2번 */
  color: ${(props) => props.theme.colors.main2};
  line-height: 20px;

  /* 보조 컬러 2 */
  background: ${(props) => props.theme.colors.sub2};
  border-radius: 10px;
`;
