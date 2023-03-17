import type { ReactNode } from 'react';
import styled from 'styled-components';

interface CircleButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function CircleButton({ children, onClick }: CircleButtonProps) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  width: 60px;
  height: 60px;
`;

export default CircleButton;
