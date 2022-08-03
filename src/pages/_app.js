import Theme from '../styles/theme';
import "../styles/closeButton.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 