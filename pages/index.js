import Layout from '../layout/Layout';
import Head from 'next/head';

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Hello Doc</title>
            </Head>
            <div className="prose">
                <p>
                    Hello! Welcome to hello doc! Please go here to checkout the
                    documentation. Please note, you may be auto redirected.
                </p>
            </div>
        </Layout>
    );
}
