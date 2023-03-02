import Image from 'next/image';
import styled from 'styled-components';

interface ProgressBarProps {
  percent: number;
}

function ProgressBar({ percent }: ProgressBarProps) {
  const move = Math.round((percent / 10) * 22);
  return (
    <Wrapper>
      <Bar move={move}>
        <Comet move={move}>
          <Image src={'/Star2.png'} width="51" height={51} alt="comet" />
        </Comet>
        {/* <Planet>
          <Image src={'/Planet-9.png'} width="45" height={45} alt="comet" />
        </Planet> */}
      </Bar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  text-align: center;
`;

const Bar = styled.div<{ move: number }>`
  background: linear-gradient(
    84.8deg,
    #feac5e 35.52%,
    #c779d0 50.6%,
    #4bc0c8 66.97%
  );
  height: 6px;
  border-radius: 6px;
  width: 240px;
  margin: auto;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: linear-gradient(
      193deg,
      rgba(254, 172, 94, 1) 0%,
      rgba(199, 121, 208, 1) 50%,
      rgba(75, 192, 200, 1) 100%
    );
    width: ${(props) => `${props.move}px`};
    height: 6px;

    transition: 0.6s;
  }
`;

const Comet = styled.div<{ move: number }>`
  position: absolute;
  top: -25px;
  left: -20px;
  z-index: 2;
  transition: 0.6s;

  transform: ${(props) => `translateX(${props.move}px)`};
`;

const Planet = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 1;
`;
export default ProgressBar;
