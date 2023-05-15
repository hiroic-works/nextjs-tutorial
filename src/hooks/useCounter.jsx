import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // countのステートが変更された場合のみ再生成する
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

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

  return {
    count,
    doubleCount,
    isShow,
    handleClick,
    handleDisplay,
  };
};
