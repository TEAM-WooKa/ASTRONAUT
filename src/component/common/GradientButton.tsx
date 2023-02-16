import styled from 'styled-components';

interface GradientButtonProps {
  content: string;
  onClick?: () => void;
}
function GradientButton({ content, onClick }: GradientButtonProps) {
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
}

const Wrapper = styled.button`
  width: 100%;
  height: 70px;
  color: #000;
  padding: 2px;

  font-family: 'Space-Quest';
  font-style: italic;
  font-size: 32px;

  border: 1px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(
      ${(props) => props.theme.colors.lightGrey},
      ${(props) => props.theme.colors.lightGrey}
    ),
    linear-gradient(
      193deg,
      rgba(254, 172, 94, 1) 0%,
      rgba(199, 121, 208, 1) 50%,
      rgba(75, 192, 200, 1) 100%
    );

  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export default GradientButton;
