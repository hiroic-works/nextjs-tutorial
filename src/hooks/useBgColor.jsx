import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige";

      default:
        return "";
    }
  }, [router.pathname]);
  useEffect(() => {
    // ※本来はDOMに直接アクセスしてはいけない。どうしても必要な場合はuseRef()を使う。
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]); // bgColorの変更を監視して再生成
};
