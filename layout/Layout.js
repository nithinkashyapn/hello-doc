import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div className="h-screen flex flex-col">
            <nav className="flex items-center h-16 px-6 fixed inset-x-0 top-0 z-20 border-b justify-between bg-gray-100">
                <div className="fill-current w-20 h-10 block">
                    <span className="sr-only">Hello Docs</span>
                    <img src="/vercel.svg" className="m-2" alt="Hello Docs" />
                </div>
            </nav>
            <div className="flex flex-1 h-full">
                <Sidebar />
                <article className="relative pt-24 px-6 md:px-8 w-full max-w-full overflow-x-hidden xl:pr-64">
                    <main className="max-w-screen-md mx-auto">{children}</main>
                </article>
            </div>
        </div>
    );
}
