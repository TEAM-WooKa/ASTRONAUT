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
          <Image src={'/Comet.svg'} width="45" height={45} alt="comet" />
        </Comet>
        <Planet>
          <Image src={'/Planet-9.svg'} width="45" height={45} alt="comet" />
        </Planet>
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
  background-color: #d9d9d9;
  height: 6px;
  border-radius: 6px;
  width: 220px;
  margin: auto;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: ${(props) => props.theme.colors.sub3};
    width: ${(props) => `${props.move}px`};
    height: 6px;

    transition: 0.6s;
  }
`;

const Comet = styled.div<{ move: number }>`
  position: absolute;
  top: -20px;
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
