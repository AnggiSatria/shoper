import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='description'
                    content='Talent Insider Website Description...'
                />
                <meta
                    name='keywords'
                    content='Talent Insider, website, keywords...'
                />
                <meta name='author' content='Talent Insider' />
                <title>Talent Insider - Boilerplate Next 14</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
