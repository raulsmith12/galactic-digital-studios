import Head from "next/head";

const MetaHeader = ({ metatitle, metadesc, metaurl, metakeys }) => {
    return (
        <>
            <Head>
                <title>{metatitle}</title>
                <meta charSet="utf-8" />
                <meta name="title" content={metatitle} />
                <meta name="description" content={metadesc} />
                <meta name="keywords" content={metakeys} />
                <meta name="robots" content="all" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={metaurl} />
                <meta property="og:title" content={metatitle} />
                <meta property="og:description" content={metadesc} />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={metaurl} />
                <meta property="twitter:title" content={metatitle} />
                <meta property="twitter:description" content={metadesc} />
                <meta property="twitter:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />
                
                <link rel="canonical" href={metaurl} />
                <link rel="icon" href="favicon.ico" />
                <link rel="manifest" href="manifest.json" />
            </Head>
        </>
    )
}

export default MetaHeader;