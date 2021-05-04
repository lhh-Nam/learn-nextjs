import Link from "next/link";
import styles from "../styles/404.module.scss";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <Head>
        <title>Nam | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>Ooooops..........</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a className={styles.link}>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
