import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      // ※直接countにカウントを加えず、関数の引数で前のcountの値が取得できるのでそれに対してカウントを加える
      setCount((prevCount) => prevCount + 1);
    }
    // 第二引数に指定した変数を監視して再生成する。
    // 空配列を指定したら最初にレンダリングされる時だけ再生成となるためcountは1のまま更新されない。
    // ※ただ、setCount()の引数のprevCountは前回のcountを参照して更新しているため、こちらの値は更新され続ける
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = (e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内までです");
      return;
    }
    setText(e.target.value);
  };

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
      {isShow && <h1>{count}</h1>}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />

      <Main page="index" />

      <Footer />
    </div>
  );
}
