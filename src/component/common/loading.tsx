import Image from 'next/image';
import styled from 'styled-components';

import LoadingBarSVG from '@/component/image/loading-bar-svg';

function Loading() {
  return (
    <Wrapper>
      <RotateWrapper>
        <LoadingBarSVG />
        <Comet>
          <Image src="/Star2.png" alt="star" width={51} height={51} />
        </Comet>
      </RotateWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  width: 220px;
  height: 220px;
`;

const RotateWrapper = styled.div`
  width: 100%;
  height: 100%;
  animation: animate 3s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Comet = styled.div`
  position: absolute;
  top: 105px;
  left: -20px;
  transform: rotate(0deg);
`;

const Star = styled.div`
  width: 51px;
  height: 51px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
export default Loading;
