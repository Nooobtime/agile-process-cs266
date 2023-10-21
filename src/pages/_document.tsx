import Document, { Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="th">
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
