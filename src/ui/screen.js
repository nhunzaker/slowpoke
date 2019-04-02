import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

export function Screen({ children }) {
  return <PaperProvider>{children}</PaperProvider>;
}
