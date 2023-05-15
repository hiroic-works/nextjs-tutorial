import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "index" },
  { href: "/about", label: "about" },
];
export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item, i) => {
        return (
          <Link href={item.href} className={styles.anchor} key={i}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
