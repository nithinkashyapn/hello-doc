import Head from 'next/head';
import Layout from '../../layout/Layout';
import { getAllPageSlugs } from '../../helpers/pages';

export async function getStaticPaths() {
    const paths = getAllPageSlugs();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const doc = await import(`../../content/${slug}.md`);

    return {
        props: {
            postData: doc.default
        }
    };
}

export default function Doc({ postData }) {
    const title = `${postData.match(/<h1.*>(.+)<\/h1>/)?.[1] || 'Hello Doc'}`;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: postData }} />
        </Layout>
    );
}
