import Link from 'next/link';
import * as Files from '../data/files';
import { useRouter } from 'next/router';

export default function Sidebar({ hidden, onClick }) {
    return (
        <aside
            className={`h-full bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 ${
                hidden ? 'hidden' : ''
            }`}
            style={{ top: '4rem', height: 'calc(100vh - 4rem)' }}
        >
            <div className="w-full p-4 md:mb-16 overflow-y-auto">
                <NavLinkList slugs={Files} onClickHandler={() => onClick} />
            </div>
        </aside>
    );
}

const NavLinkList = (props) => {
    const slugs = props.slugs;
    const slugList = slugs.map((slug, i) => {
        let hrefUrl = '/docs/' + slug;
        return <NavLink href={hrefUrl} key={hrefUrl}>{slug}</NavLink>;
    });
    return <ul onClick={props.onClickHandler}>{slugList}</ul>;
};

function NavLink({ href, children }) {
    const { asPath } = useRouter();

    const active = asPath == href;

    return (
        <li>
            <Link href="/docs/[slug]" as={href}>
                <a
                    className={`p-2 hover:bg-blue-100 block ${
                        active ? 'font-bold text-gray-800' : 'text-gray-600'
                    }`}
                >
                    {children}
                </a>
            </Link>
        </li>
    );
}
