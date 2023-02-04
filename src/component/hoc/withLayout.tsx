import withHead from '@/component/hoc/withHead';
import styled from 'styled-components';

function withLayout(
  Component: (props: any) => JSX.Element,
  title: string,
  description: string,
) {
  const C = (props: any) => {
    return (
      <>
        <Container className="container">
          <header></header>
          <Main>
            <Component {...props} />
          </Main>
        </Container>
      </>
    );
  };

  return withHead(C, title, description);
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  color: #fff;
  overflow-y: auto;
`;

const Main = styled.div`
  max-width: 475px;
  text-align: center;
  margin: 20px;
  width: 100%;
`;
export default withLayout;
