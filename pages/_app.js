import "../styles/globals.css";
import "antd/dist/antd.css";
import MyHeader from "../components/myHeader";

function MyApp({ Component, pageProps }) {
  return (
    <MyHeader>
      <Component {...pageProps} />
    </MyHeader>
  );
}

export default MyApp;
