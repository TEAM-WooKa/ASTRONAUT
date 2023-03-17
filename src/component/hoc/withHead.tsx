import Head from 'next/head';

function withHead(
  Component: (props: any) => JSX.Element,
  title: string,
  description: string,
) {
  const C = (props: any) => {
    return (
      <>
        <Head>
          <title>우주인 ID card</title>
          <meta name="description" content={description} />
        </Head>

        <Component {...props} />
      </>
    );
  };

  return C;
}

export default withHead;
