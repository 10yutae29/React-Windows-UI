import { SubType } from "./ProcessType.d";
export enum SubType {
  file = "File",
  folder = "Folder",
}

// export interface Processes {
//   [mainType: string]: Process[];
// }
export interface Processes {
  [key: string]: Process;
}

export interface Process {
  name: string;
  img: string;
  subType: SubType;
  structure?: Process;
  cpn: string;
  idx: number;
  isShow: boolean;
  key: number;
}

export interface SubTypeCount {
  [key: string]: number;
}

export interface Program {
  name: string;
  img: string;
  mainType: string;
  subType: SubType;
  cpn: string;
  isArrow: boolean;
}

export interface InfosContext {
  componentsInfos: ComponentsInfos;
  directoryStructure: DirectoryStructure;
}

export interface ComponentsInfos {
  [key: string]: ReactElement | null;
}

export interface DirectoryStructure {}
