import React, { createContext, JSX, ReactElement, useState } from "react";
import {
  ComponentsInfos,
  DirectoryStructure,
  InfosContext,
} from "../ProcessType";

const infosContext = createContext<InfosContext>({
  componentsInfos: {},
  directoryStructure: {},
});

export default function InfosProvider({
  children,
  componentsInfos,
  directoryStructure,
}: {
  children: JSX.Element;
  componentsInfos: ComponentsInfos;
  directoryStructure: DirectoryStructure;
}) {
  const [value, setValue] = useState<InfosContext>({
    componentsInfos,
    directoryStructure,
  });
  return (
    <infosContext.Provider value={value}>{children}</infosContext.Provider>
  );
}
