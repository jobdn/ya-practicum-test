import clsx from "clsx";
import styles from "./PhotoWithDescription.module.css";

interface PhotoWithDescriptionProps {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  text: string;
  reverse?: boolean;
}

export const PhotoWithDescription = (props: PhotoWithDescriptionProps) => {
  const { className, imgSrc, imgAlt, text, reverse } = props;
  return (
    <div
      className={clsx(
        styles.photoDescContainer,
        reverse && styles.photoDescContainer_reverse,
        className
      )}
    >
      <div
        className={clsx(
          styles.imgWrapper,
          reverse && styles.imgWrapper_reverse
        )}
      >
        <img className={styles.img} src={imgSrc} alt={imgAlt} />
      </div>

      <p className={styles.text}>{text}</p>
    </div>
  );
};
