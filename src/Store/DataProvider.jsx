import React, { useState } from "react";
import { defaultValues, loaderUpdateData, DataContext, LoaderContext, LoaderUpdateContext } from "./data-context";

export default function DataProvider({ children }) {
  const [isLoading, setIsloading] = useState(true);
  const hideLoader = () => setIsloading(false);
  loaderUpdateData.hideLoader = hideLoader;

  return (
    <DataContext.Provider value={defaultValues}>
      <LoaderContext.Provider value={isLoading}>
        <LoaderUpdateContext.Provider value={loaderUpdateData}>{children}</LoaderUpdateContext.Provider>
      </LoaderContext.Provider>
    </DataContext.Provider>
  );
}
