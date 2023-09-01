import styles from "./HomePage.module.css";

import SelfiSrc from "../assets/selfi.jpeg";
import SchoolPhotoSrc from "../assets/school-photo.jpeg";

// TODO: add aliases
import { PhotoWithDescription } from "../../../widgets/PhotoWithDescription";

export const HomePage = () => {
  return (
    <>
      <PhotoWithDescription
        text="Одно из моих недавних фото"
        imgSrc={SelfiSrc}
        className={styles.photoSection}
        imgAlt="Одно из моих недавних фото"
      />
      <PhotoWithDescription
        text="Школьное фото"
        imgSrc={SchoolPhotoSrc}
        reverse={true}
        className={styles.photoSection}
        imgAlt="Школьное фото"
      />
    </>
  );
};
