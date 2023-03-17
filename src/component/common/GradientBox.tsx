import type { ReactNode } from 'react';
import styled from 'styled-components';

import { Gradient1 } from '@/assets/styles/gradient';
import GradientBorderBox from '@/component/common/GradientBorderBox';

interface GradientBoxProps {
  title?: string;
  children: ReactNode;
}
function GradientBox({ title, children }: GradientBoxProps) {
  return (
    <GradientBorderBox borderRadius="10px">
      <Wrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <Content>{children}</Content>
      </Wrapper>
    </GradientBorderBox>
  );
}

const Wrapper = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: normal;
`;

const TitleWrapper = styled(Gradient1)`
  height: 28px;
  border-radius: 10px 10px 0 0;
  opacity: 0.9;
  text-align: left;
  font-weight: 700;

  color: #fff;
  line-height: 28px;
  padding: 0 10px;
`;

const Content = styled.div`
  /* height: 100%;
  border-radius: 0 0 10px 10px;
  font-weight: 500;

  background-color: rgba(241, 241, 241, 0.7); */
`;

export default GradientBox;
