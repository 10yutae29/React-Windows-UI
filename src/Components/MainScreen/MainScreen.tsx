import styles from "./MainScreen.module.css";
import type { MainScreenProps } from "./MainScreenType";
import MainScreenBottomBar from "../../Items/MainScreenItems/MainScreenBottomBar/MainScreenBottomBar";
import MainScreenBackground from "../../Items/MainScreenItems/MainScreenBackground/MainScreenBackground";

export default function MainScreen({ backgroundImg = null }: MainScreenProps) {
  return (
    <div className={styles.Mainscreen__Container}>
      <MainScreenBackground backgroundImg={backgroundImg} />
      <MainScreenBottomBar />
    </div>
  );
}
