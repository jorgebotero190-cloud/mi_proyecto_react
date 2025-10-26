import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const newLocal = <Main />;
  return (
    <Html lang="en">
      <Head />
      <body>
        {newLocal}
        <NextScript />
      </body>
    </Html>
  );
}
