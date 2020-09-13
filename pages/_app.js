import '../styles/styles.css';
import '../styles/prism.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
