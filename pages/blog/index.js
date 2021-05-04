import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Blog.module.scss";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

function index({ blogs }) {
  return (
    <div>
      <Head>
        <title>Nam | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>Bloggggggg</h1>

      {blogs.map((blog, index) => (
        <Link href={`/blog/${blog.id}`} key={index}>
          <a className={styles.single}>
            <h3>{blog.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default index;
