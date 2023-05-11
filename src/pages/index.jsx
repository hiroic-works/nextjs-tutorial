import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect } from "react";

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.href);
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント");
    // ※本来はDOMに直接アクセスしてはいけない。どうしても必要な場合はuseRef()を使う。
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント");
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
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>

      <Main page="index" />

      <Footer />
    </div>
  );
}
