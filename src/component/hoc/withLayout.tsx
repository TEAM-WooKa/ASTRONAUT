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
`;

const Main = styled.div``;
export default withLayout;
