import Layout from '../layout/Layout';
import Head from 'next/head';

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Hello Doc</title>
            </Head>
            <div className="prose">
                <h1>
                    Hello! Welcome to hello doc! 
                </h1>
                <p>
                    Please click on the sidebar to
                    checkout the documentation. P.S., you may be auto
                    redirected.
                </p>
            </div>
        </Layout>
    );
}
