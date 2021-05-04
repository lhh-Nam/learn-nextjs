import React from "react";
import Head from "next/head";

function about({ stars }) {
  return (
    <div>
      <Head>
        <title>Nam | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Next stars: {stars}
    </div>
  );
}

const API = "https://api.github.com/repos/vercel/next.js";

about.getInitialProps = async (ctx) => {
  const res = await fetch(API);

  const json = await res.json();
  console.log(json);
  return { stars: json.stargazers_count };
};

export default about;
