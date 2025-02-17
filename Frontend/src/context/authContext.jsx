import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const context = createContext();

export const AuthContextProvider = ({ children }) => {
    
    const [AccessToken, setAccessToken] = useState(JSON.parse(localStorage.getItem("AccessToken")) || null);
    const [userData, setuserData] = useState({});
    const Token = `Bearer ${AccessToken}`;
 
    //fetch loged in user data
    const fetchUserData = async () => {
        try {
            let response = await fetch("http://localhost:4000/api/v1/users/getUserData", {
                method: "GET",
                headers: {
                    "Authorization": Token
                }
            });
            const fetchedData = await response.json();

            if (response.ok) {
                setuserData(fetchedData.data);
            } else {
                throw new Error("User Data not fetched successfully")
            }

        } catch (error) {
            console.log(`Frontend::ContextApi::UserContext::${error.msg}`);
        }

    };

    // store token in local storage
    const SetTokenInLocalStorage = (Token) => {
        localStorage.setItem("AccessToken", JSON.stringify(Token))
        setAccessToken(Token)
    };

    const Logout= () =>{
        localStorage.removeItem("AccessToken")
        setAccessToken(null)
    }

    useEffect(() => {
        AccessToken && fetchUserData();
    }, [AccessToken]);



    return (
        <context.Provider value={{ SetTokenInLocalStorage , userData, Logout, Token, AccessToken, setuserData}}>
            {children}
        </context.Provider>
    )
};


export const useAuthContext = () => {
    return useContext(context)
};