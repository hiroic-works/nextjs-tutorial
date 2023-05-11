import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      // ※直接countにカウントを加えず、関数の引数で前のcountの値が取得できるのでそれに対してカウントを加える
      setCount((prevCount) => prevCount + 1);
    }
    // 第二引数に指定した変数を監視して再生成する。空配列を指定したら最初にレンダリングされる時だけとなるためcountは1のままになる
  }, [count]);

  useEffect(() => {
    // ※本来はDOMに直接アクセスしてはいけない。どうしても必要な場合はuseRef()を使う。
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <meta name="description" content="index page" />
      </Head>

      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />

      <Footer />
    </div>
  );
}
