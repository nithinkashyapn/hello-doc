import '../styles/styles.css';
import '../styles/prism.css';
import '../styles/wysiwyg.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
