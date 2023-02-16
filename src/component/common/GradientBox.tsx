import { Gradient1 } from '@/assets/styles/gradient';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface GradientBoxProps {
  title?: string;
  children: ReactNode;
}
function GradientBox({ title, children }: GradientBoxProps) {
  return (
    <>
      <TitleWrapper>{title}</TitleWrapper>
      <Content>{children}</Content>
    </>
  );
}

const TitleWrapper = styled(Gradient1)`
  height: 25px;
  border-radius: 10px 10px 0 0;
  opacity: 0.9;
`;

const Content = styled.div`
  border-radius: 0 0 10px 10px;
  background-color: rgba(241, 241, 241, 0.7);
`;

export default GradientBox;
