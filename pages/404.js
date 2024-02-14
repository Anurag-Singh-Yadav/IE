// pages/404.js
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className={'container'}>
            <h1 className={'title'}>404 - Page Not Found</h1>
            <p className={'description'}>
                Oops! The page you're looking for doesn't seem to exist.
            </p>
            <Link href="/">
                <a className={'homeLink'}>Go back home</a>
            </Link>
        </div>
    );
}
