import { useEffect, useRef } from "react";

import styles from "./ColorChager.module.css";
import { generateRandomColor } from "../model/generateColor";

interface ColorChangerProps {
  className?: string;
}

export const ColorChanger = (props: ColorChangerProps) => {
  const { className } = props;
  const boxRef = useRef<HTMLDivElement>(null);

  const handelColorChange = () => {
    if (boxRef && boxRef.current) {
      boxRef.current.style.backgroundColor = generateRandomColor();
    }
  };

  useEffect(() => {
    if (boxRef && boxRef.current) {
      boxRef.current.style.backgroundColor = generateRandomColor();
    }
  }, []);

  return (
    <div className={className}>
      <button className={styles.changer} onClick={handelColorChange}>
        Изменить цвет
      </button>
      <p>С помощью 👆 этой кпопки </p>
      <p>Можно изменять цвет вот этого 👇 элемента.</p>
      <div className={styles.box} ref={boxRef}></div>
      <p>
        Именно с помощью <span className={styles.underscore}>Javascript</span>{" "}
        можно делать такие штуки 😱😊
      </p>
    </div>
  );
};
