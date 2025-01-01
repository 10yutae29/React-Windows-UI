import styles from "./MainScreenBottmBar.module.css";
import { WindowsIcon } from "../../../WindowsElements/Icons";
import BottomBarSearch from "./BottomBarSearch/BottomBarSearch";
import BottomIconWrapper from "./BottomIconWrapper/BottomIconWrapper";
export default function MainScreenBottomBar() {
  return (
    <div className={styles.MainScreen_BottomBar_Container}>
      <BottomBarMiddle />
    </div>
  );
}

function BottomBarMiddle() {
  return (
    <div className={styles.MainScreen_BottomBar_Middle_Container}>
      <BottomIconWrapper>
        <WindowsIcon />
      </BottomIconWrapper>
      <BottomBarSearch />
    </div>
  );
}
