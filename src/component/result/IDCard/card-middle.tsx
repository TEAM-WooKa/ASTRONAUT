import styled from 'styled-components';
import Image from 'next/image';

interface CardMiddleProps {
  children: React.ReactNode;
  image: string;
  subImage?: string;
}

export default function CardMiddle({
  children,
  subImage,
  image,
}: CardMiddleProps) {
  return (
    <MiddleWrapper>
      <ImageWrapper>
        {subImage && (
          <RomiImageWrapper>
            <Image src={subImage} width="60" height="48" alt="romi" />
          </RomiImageWrapper>
        )}
        <Image src={image} width="90" height="120" alt="romi" />
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
  image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RomiImageWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: -15px;
`;
