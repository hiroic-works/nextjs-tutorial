import Head from "next/head";
import "src/styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

// ステートのリフトアップ（親で定義して各子コンポーネントに渡してステートの共通化を図る）
function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();

  useBgLightBlue();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
