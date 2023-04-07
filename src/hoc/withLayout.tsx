import styled from 'styled-components';

import DesktopHeader from '@/component/layout/desktop-header';
import MobileFooter from '@/component/layout/mobile-footer';
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
            <MobileFooter />
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

  display: flex;
  position: relative;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 700px) {
    padding: 0;
    background-image: url('/images/desktop_full_bg.webp');
  }
`;

const MainInner = styled.div`
  width: 350px;
  padding-top: 30px;
  margin: auto;
  max-width: 350px;
  height: fit-content;

  position: relative;
`;

export default withLayout;
