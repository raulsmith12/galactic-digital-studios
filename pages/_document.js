import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <Script strategy="lazyOnLoad" src="https://www.googletagmanager.com/gtag/js?id=G-L19G18BTF9"/>
                <Script id="google-analytics" strategy="lazyOnLoad">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-L19G18BTF9', {
                        page_path: window.location.pathname,
                    });
                    `}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;