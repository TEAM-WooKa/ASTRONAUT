import { useRouter } from 'next/router';
import styled from 'styled-components';

import GradientBox from '@/component/common/GradientBox';
import { FlexCenter } from '@/component/core/Flex';
import withLayout from '@/component/hoc/withLayout';

function ResultImagePage() {
  const { query, back } = useRouter();
  const imageUrl = query.image as string;
  return (
    <Wrapper>
      <InnerWrapper>
        <GradientBox>
          <GradientBoxInner>
            카드를 길게 누르면 다운로드 할 수 있습니다!
          </GradientBoxInner>
        </GradientBox>
        {imageUrl ? (
          <img src={imageUrl} width="350px" height="220px" alt="card" />
        ) : (
          <p>이미지 다운에 실패했습니다. </p>
        )}
        <BackButton onClick={() => back()}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.017 2.40002L2.7666 9.68336M2.7666 9.68336L10.017 16.9667M2.7666 9.68336H19.8666"
              stroke="#343232"
              strokeWidth="3"
              strokeLinecap="square"
            />
          </svg>
        </BackButton>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 65px;
  height: 100vh;
  width: 100vw;
  max-width: 475px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const InnerWrapper = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GradientBoxInner = styled.div`
  padding: 10px 0 18px;
  text-align: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.bg};
`;

const BackButton = styled(FlexCenter)`
  width: 38px;
  height: 38px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.sub2};
`;
export default withLayout(
  ResultImagePage,
  '카드 이미지 다운로드',
  '카드 이미지 다운로드',
);
