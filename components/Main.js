import styles from "./Main.module.css";
import { Links } from "../components/Links";
import { HeadLine } from "../components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <HeadLine page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </HeadLine>

      <Links />
    </main>
  );
}
