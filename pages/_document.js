import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" href="/favicon.png" />
            <link rel="preload" href="/fonts/WEST.TTF" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Truckin.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/halloween.ttf" as="font" crossOrigin="" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/> 
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet"/>
            <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: "Western";
                src: url("/fonts/West.ttf");
                font-style: normal;
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: "Truckin";
                src: url("/fonts/Truckin.ttf");
                font-style: medium;
                font-weight: 500;
                font-display: swap;
              }
              @font-face {
                font-family: "halloween";
                src: url("/fonts/halloween.ttf");
                font-style: medium;
                font-weight: 500;
                font-display: swap;
              }
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument