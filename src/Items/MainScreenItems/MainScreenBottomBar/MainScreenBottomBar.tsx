import styles from "./MainScreenBottmBar.module.css";

import BottomBarMiddle from "./BottomBarMiddle/BottomBarMiddle";
export default function MainScreenBottomBar() {
  return (
    <div className={styles.MainScreen_BottomBar_Container}>
      <BottomBarMiddle />
    </div>
  );
}
