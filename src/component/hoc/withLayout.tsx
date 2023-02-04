import withHead from '@/component/hoc/withHead';

function withLayout(
  Component: (props: any) => JSX.Element,
  title: string,
  description: string,
) {
  const C = (props: any) => {
    return (
      <>
        <div className="container">
          <header></header>
          <main>
            <Component {...props} />
          </main>
        </div>
      </>
    );
  };

  return withHead(C, title, description);
}

export default withLayout;
