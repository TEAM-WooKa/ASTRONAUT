import styled from 'styled-components';

import DesktopHeader from '@/component/layout/desktop-header';
import withHead from '@/hoc/withHead';

function withLayout(
  Component: (props: any) => JSX.Element,
  title: string,
  description: string,
) {
  const C = (props: any) => {
    return (
      <>
        <Container className="container">
          <Main>
            <DesktopHeader />
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
  text-align: center;
  width: 100%;
  background-image: url('/images/bg.png');
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  padding: 20px;

  @media screen and (min-width: 700px) {
    padding: 0;
    background-image: url('/images/desktop_full_bg.webp');
    display: flex;
  }
`;

const MainInner = styled.div`
  width: 350px;
  padding: 30px 0;
  margin: auto;
  max-width: 350px;
  height: 100%;

  position: relative;
`;

export default withLayout;
