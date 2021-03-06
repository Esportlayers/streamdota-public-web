import { ReactElement } from "react";
import Nav from "../components/Nav";
import Footer from "../components/sections/Footer";
import Head from 'next/head';
import Container from "../components/Container";

export default function DataPolicy(): ReactElement {
    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="google" content="notranslate" />
            <meta httpEquiv="Content-Language" content="de" />
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
            <title>streamdota.com - Data Policy</title>

            <meta property="og:site_name" content="StreamDota - Your toolbox for streaming dota" />
            <meta property="og:title" content={'Dota bot, overlays, stats & more'} />
            <meta property="og:description" content={'Your toolbox for streaming dota2 | Dota Win Loss Overlay | Bet System | Roshan Timer | Live Stats of Picks & Bans | and much more...'} />
            <meta property="og:image" content={'/shared/share.png'} />
            <meta property="og:url" content="https://streamdota.com/" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="description" content="Your toolbox for streaming dota2 | Dota Win Loss Overlay | Bet System | Roshan Timer | Live Stats of Picks & Bans | and much more..." />

            <link rel="apple-touch-icon" sizes="180x180" href="/shared/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/shared/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/shared/favicon-16x16.png" />
            <link rel="manifest" href="/shared/site.webmanifest" />
            <link rel="mask-icon" href="/shared/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/shared/favicon.ico" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content="/shared/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
        <Nav noScroll onWhite />

        <Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <b>Information provided according to Sec. 5 German Telemedia Act (TMG):</b>
            <br />
            Michael Ketzer<br />
            Rabenstraße 28<br />
            40789 Monheim<br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <b>Contact:</b>
            <br />
            E-Mail: admin@griefco.de<br />
            Discord: griefcode#6919<br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span><strong>Liability for Contents</strong></span>
            <strong>Liability for Contents</strong>
            <span><strong>Liability for Contents</strong></span>
            <br />
            <span>As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search forevidences that indicate illegal activities. Legal obligations to removing information or to blocking the use of information remain unchallenged. Inthis case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</span>
            <br />
            <br />
            <br />
            <span><strong>Liability for Links</strong></span>
            <br />
            <span>Our offer includes links to external third party websites. We have no influence on the contents of thosewebsites, therefore we cannot guarantee for those contents. Providers or administrators of linkedwebsites are always responsible for their own contents.The linked websites had been checked for possible violations of law at the time of the establishment of thelink. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contentsof linked websites cannot be imposed without reasonable indications that there has been a violation oflaw. Illegal links will be removed immediately at the time we get knowledge of them.</span>
            <br />
            <br />
            <br />
            <span><strong>Copyright</strong></span>
            <br />
            <span>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites arepermitted for private use only.&nbsp;</span>
            <br />
            <span>The commercial use of our contents without permission of the originator is prohibited.&nbsp;</span>
            <br />
            <span>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</span>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Container>
        <Footer />

        <style jsx global>{`
            body, html {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 16px;
            }

            h1 {
                font-size: 3rem;
            }

            :root {
                --twitch: #772ce8;
                --primary-accent: #24d46a;
                --secondary-accent: #A34100;
            }

            * {
                box-sizing: border-box;
            }
        `}</style>
    </>;
}
