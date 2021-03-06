import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { flush } from 'react-emotion'

import style from '../styles/index.css'

const dev = process.env.NODE_ENV !== 'production'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    if (dev) {
      flush()
    }
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>ดื่มชา</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
