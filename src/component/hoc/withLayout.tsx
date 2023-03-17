import styled from 'styled-components';

import withHead from '@/component/hoc/withHead';

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
            <MainInner>
              <Component {...props} />
            </MainInner>
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
  width: 100%;
  padding: 20px;
  background-image: url('/images/bg.png');
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`;

const MainInner = styled.div`
  width: 340px;
  padding: 50px 0;
  margin: auto;
  max-width: 340px;
  height: 100%;
`;

export default withLayout;
