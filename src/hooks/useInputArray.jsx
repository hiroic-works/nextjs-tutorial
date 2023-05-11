import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
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
  return { text, array, handleChange, handleAdd };
};
