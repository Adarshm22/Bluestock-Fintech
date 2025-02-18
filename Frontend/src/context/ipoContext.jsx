import {createContext, useContext, useState} from 'react'
import { useAuthContext } from './authContext'
import toast from 'react-hot-toast'

const context = createContext()

export const IpoContextProvider = ({children})=>{
    
    const {Token} = useAuthContext();
    const [IpoList, setIpoList] = useState([]);
    const [DisplayedIpoList, setDisplayedIpoList] = useState([]);
    const [IpoData, setIpoData] = useState({})
    

    const fetchIpos = async ()=>{
        try {
            const response = await fetch("http://localhost:4000/api/v1/ipos/getIpos",{
                method:"GET"
            });

            const responseData = await response.json();
            if(response.ok){
                setIpoList(responseData.data)
                setDisplayedIpoList(responseData.data)
            }else{
                toast.error(responseData.message)
                throw new Error("responsd fail")
            }
        } catch (error) {
            console.log("Error in Ipocontext:: FetchIpo ::",error)
        }
    }

    const filterIpoAfterDelete = (id)=>{
        const Data = IpoList.filter((ipo)=> ipo._id !== id)
        setDisplayedIpoList(Data)
    }

    const filterIpoForViewing = (id)=>{
        const ipo = DisplayedIpoList.filter((data)=> data._id === id)
        setIpoData(ipo[0])
    };
    
    const deleteIpo = async (id)=>{
        try {
            const response = await fetch(`http://localhost:4000/api/v1/ipos/${id}/deleteIpo`,{
                method:"DELETE",
                headers:{
                    Authorization : Token
                }
            });

            const responseData = await response.json();
            if(response.ok){
                toast.success(responseData.message)
                filterIpoAfterDelete(id)
            }else{
                toast.error(responseData.message)
                throw new Error(responseData)
            }

        } catch (error) {
            console.log("ipoContext :: Error in deleteIPo",error)
        }
    }

    const fetchIpoToBeUpdated = async (id)=>{
        const ipo = DisplayedIpoList.filter((data)=> data._id === id)
        setIpoData(ipo[0])
    };


    return (
        <context.Provider value={{fetchIpos, IpoList,Token, deleteIpo, DisplayedIpoList, IpoData, filterIpoForViewing, fetchIpoToBeUpdated}} >
        {children}
        </context.Provider >
    )
}

export const useIpoContextProvider = ()=>{
    return useContext(context)
}