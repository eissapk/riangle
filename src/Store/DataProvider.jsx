import DataContext from "./data-context";
import { defaultValues } from "./data-context";

export default function DataProvider({ children }) {
  return <DataContext.Provider value={defaultValues}>{children}</DataContext.Provider>;
}
