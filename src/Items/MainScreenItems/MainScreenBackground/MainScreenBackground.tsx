import styles from "./MainScreenBackground.module.css";
import { MainScreenBackgroundProps } from "./MainScreenBackgroundType";
export default function MainScreenBackground({
  backgroundImg = null,
}: MainScreenBackgroundProps) {
  return (
    <div className={`${styles.MainScreen_Background_Container}`}>
      {backgroundImg === null ? (
        <div className={styles.MainScreen_Background_Default} />
      ) : (
        <div
          className={styles.MainScreen_Background_Img}
          style={{ backgroundImage: backgroundImg }}
        />
      )}
    </div>
  );
}
