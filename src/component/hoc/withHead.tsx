import Head from 'next/head';
import { ReactNode } from 'react';

function withHead(
  Component: (props: any) => JSX.Element,
  title: string,
  description: string,
) {
  const C = (props: any) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>

        <Component {...props} />
      </>
    );
  };

  return C;
}

export default withHead;
