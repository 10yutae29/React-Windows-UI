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
        <img className={styles.MainScreen_Background_Img} src={backgroundImg} />
      )}
    </div>
  );
}
