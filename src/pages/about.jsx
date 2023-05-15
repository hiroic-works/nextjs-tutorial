import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <meta name="description" content="about page" />
      </Head>

      <Header />
      {props.isShow && <h1>{props.doubleCount}</h1>}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <br />
      <br />
      <div>
        <button onClick={props.handleAdd}>追加</button>
      </div>
      <ul>
        {props.array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Main page="about" />

      <Footer />
    </div>
  );
};

export default About;
