import styled from 'styled-components';

interface AButtonProps {
  content: string;
  onClick?: () => void;
}
function AButton({ content, onClick }: AButtonProps) {
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
}

const Wrapper = styled.button`
  background-color: ${(props) => props.theme.colors.lightGrey};
  color: #000;

  width: 100%;
  padding: 15px;
  border-radius: 20px;
  text-align: center;

  font-family: 'Space-Quest';
  font-style: italic;
  font-size: 32px;
`;

export default AButton;
