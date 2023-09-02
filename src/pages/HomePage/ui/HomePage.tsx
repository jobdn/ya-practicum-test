import styles from "./HomePage.module.css";
import { LikeProgrammingSection } from "./LikeProgramming/LikeProgrammingSection";

import SelfiSrc from "../assets/selfi.jpeg";
import SchoolPhotoSrc from "../assets/school-photo.jpeg";
import TutorialVideo from "../assets/ya-practicum.mp4";

// TODO: add aliases
import { PhotoWithDescription } from "../../../widgets/PhotoWithDescription";
import { VideoPlayer } from "../../../shared/ui/VideoPlayer";

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
      <LikeProgrammingSection />

      <h2>Скринкаст</h2>
      <VideoPlayer
        className={styles.video}
        src={TutorialVideo}
        width="100%"
        controls
      />
    </>
  );
};
