import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

// 関数の引数による分割代入
export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <meta name="description" content="about page" />
      </Head>

      <Header />
      {isShow && <h1>{doubleCount}</h1>}
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
      <Main page="about" />

      <Footer />
    </div>
  );
}
