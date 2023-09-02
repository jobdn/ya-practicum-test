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
    <section
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
        <img className={styles.img} width={400} src={imgSrc} alt={imgAlt} />
      </div>

      <p className={styles.desc}>{text}</p>
    </section>
  );
};
