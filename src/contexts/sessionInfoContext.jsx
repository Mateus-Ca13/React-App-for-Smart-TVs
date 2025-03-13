import { createContext, useState } from "react";

const sessionInfoContext = createContext();

const SessionInfoContextProvider = ({children})=>{ 

    // Usar contexto futuramente...

    return (
    <sessionInfoContext.Provider 
    value={{ 

    }}>
        {children}
    </sessionInfoContext.Provider>
    )
};

export { sessionInfoContext, SessionInfoContextProvider };
