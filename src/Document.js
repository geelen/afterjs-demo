import React from 'react';
import { ServerStyleSheet } from 'styled-components'
import { AfterRoot, AfterData } from '@jaredpalmer/after';

export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = await renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { assets, data, ...page, styleTags};
  }

 render() {
    const { assets, data, styleTags, helmet } = this.props;
    console.log({helmet})

    return (
      <html>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>After.js on FAB</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {styleTags}
        </head>
        <body>
          <AfterRoot />
          <AfterData data={data}/>
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
