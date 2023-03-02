import { GradientBoxStyled } from '@/assets/styles/gradient';
import styled from 'styled-components';

function GradientBorderBox({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>

      <BgBox>
        <BgInnerBox />
      </BgBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const InnerWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const BgBox = styled(GradientBoxStyled)`
  opacity: 0.7;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 20px;
  z-index: 0;
  overflow: hidden;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BgInnerBox = styled.div`
  background: rgba(241, 241, 241, 0.7);
`;

export default GradientBorderBox;
