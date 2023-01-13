import { createContext, useState } from "react";


export const UserDataContext = createContext({});

export const UserDataProvider = ({ children}) => {
    const [userData, setUserData] = useState({
        name: '',
        sex: '',
        age: '',
        weight: '',
        height: '',
        activityLevel:''
    });

    return(
        <UserDataContext.Provider value={{userData, setUserData}}>
            { children }
        </UserDataContext.Provider>
    );
}