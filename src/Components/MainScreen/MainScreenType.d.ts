import { IconType } from "../../Items/MainScreenItems/MainScreenIcon/MainScreenIconType";
import { ComponentsInfos, DirectoryStructure } from "../../utils/ProcessType";

export interface MainScreenProps {
  backgroundImg?: string;
  icons?: IconType[];
  componentsInfos: ComponentsInfos;
  directoryStructure: DirectoryStructure;
}
