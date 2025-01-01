import { SearchIcon } from "../../../../WindowsElements/Icons";
import styles from "./BottomBarSearch.module.css";

export default function BottomBarSearch() {
  return (
    <div className={styles.BottomBar_Search_Container}>
      <div className={styles.BottomBar_Search_Icon}>
        <SearchIcon />
      </div>
      <input
        className={styles.BottomBar_Search_Input}
        type="text"
        placeholder="검색"
      />
    </div>
  );
}
