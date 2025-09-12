"use client"; // if using Next.js App Router

import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

type AppContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter:  Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
      const [search, setSearch] = useState<string>("");
      const [filter, setFilter] = useState<string>("");

  return (
    <AppContext.Provider value={{ search, setSearch , filter, setFilter }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook (for easier usage)
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
