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
  const [array, setArray] = useState([]);

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

  const handleAdd = useCallback(() => {
    if (!text) {
      alert("何か入力してください");
      return;
    }

    // 本来ミュータブルな配列やオブジェクトをReactではイミュータブルに扱う必要があるため、
    // push()などを用いて元の配列を破壊的に変更する事はできず、スプレッド構文を使用して非破壊的に新しい配列として返さなければならない
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ値は入れられません");
        return prevArray;
      }
      return [...prevArray, text];
    });

    setText("");
  }, [text]);

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
      <br />
      <br />
      <div>
        <button onClick={handleAdd}>追加</button>
      </div>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </div>
  );
}
