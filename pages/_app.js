import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { Container, Row, Col } from "reactstrap";
import Navigation from "../components/Navigation";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navigation />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
