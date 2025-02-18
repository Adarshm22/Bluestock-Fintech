import {createContext, useContext, useState} from 'react'
import { useAuthContext } from './authContext'
import toast from 'react-hot-toast'

const context = createContext()

export const IpoContextProvider = ({children})=>{
    
    const {Token} = useAuthContext();
    const [IpoList, setIpoList] = useState([]);
    

    const fetchIpos = async ()=>{
        try {
            const response = await fetch("http://localhost:4000/api/v1/ipos/getIpos",{
                method:"GET"
            });

            const responseData = await response.json();
            if(response.ok){
                setIpoList(responseData.data)
            }else{
                toast.error(responseData.message)
                throw new Error("responsd fail")
            }
        } catch (error) {
            console.log("Error in Ipocontext:: FetchIpo ::",error)
        }
    }
    
    return (
        <context.Provider value={{fetchIpos, IpoList}} >
        {children}
        </context.Provider >
    )
}

export const useIpoContextProvider = ()=>{
    return useContext(context)
}