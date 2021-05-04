import "../styles/globals.scss";
import { Provider } from "react-redux";

import store from "../redux/Store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
