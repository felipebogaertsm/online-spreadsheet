import { useEffect, useRef } from "react";
import Head from "next/head";
import jspreadsheet from "jspreadsheet";

export default function Home() {
  const jssRef = useRef(null);

  useEffect(() => {
    if (!jssRef.current.jspreadsheet) {
      jspreadsheet(jssRef.current, {
        worksheets: [
          {
            minDimensions: [10, 10],
          },
        ],
      });
    }
  }, null);

  return (
    <>
      <Head>
        <title>Online SS</title>
        <meta name="description" content="Simple online spreadsheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={jssRef}>Hello world</div>
    </>
  );
}
