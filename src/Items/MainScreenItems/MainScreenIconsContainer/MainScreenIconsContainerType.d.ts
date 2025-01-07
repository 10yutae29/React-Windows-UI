import { ReactElement } from "react";

export interface MainScreenIconsContainerProps {
  icons: IconType[];
}

export interface IconType {
  name: string;
  img: string | SVGAElement;
  onClick?(): void;
  type: "folder" | "file";
  element?: ReactElement;
}
