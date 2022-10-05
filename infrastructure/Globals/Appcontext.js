import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({children}) {
    const [userUID,setUserUID] = useState('');
    const [userBioData,setUserBioData] = useState({email:'',firstName:'',lastName:''});
    const [signedIn,setSignedIn] = useState(false);

    return (
        <AppContext.Provider value={{userUID,setUserUID,signedIn,setSignedIn,userBioData,setUserBioData}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}