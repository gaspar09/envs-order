import Head from "next/head";

export default function Home({ nodeEnv, envSource }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{`NODE_ENV is ${nodeEnv}`}</h1>
        <h1>{`ENVs from ${envSource}`}</h1>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const nodeEnv = process.env.NODE_ENV;
  const envSource = process.env.ENV_SOURCE;

  return {
    props: {
      nodeEnv,
      envSource,
    },
  };
}
