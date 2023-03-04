import LoadingBarSVG from '@/component/image/loading-bar-svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function Loading() {
  const router = useRouter();

  const value = useRef(0);
  const handleTime = () => {
    value.current += 1;

    if (value.current >= 20) {
      router.push('/result/1');
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      handleTime();
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <RotateWrapper>
        <LoadingBarSVG />
        {/* <Star> */}
        <Comet>
          <Image src="/Star2.png" alt="star" width={51} height={51} />
        </Comet>
        {/* </Star> */}
        {/* 
        <Comet>
          <Image src="/Comet.png" alt="comet" width={45} height={45} />
        </Comet> */}
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
