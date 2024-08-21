import React from "react";
import { globalState } from "./data";

export const GlobalContext = React.createContext({context: globalState, setContext: (context: any) => {}});

export const HomeContext = ( { children }: { children: React.ReactNode }) => {
    const [context, setContext] = React.useState(globalState);

    return (
        <GlobalContext.Provider value={{context, setContext}}>
            {children}
        </GlobalContext.Provider>
    )
}