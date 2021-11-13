import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import login from '../pages/Login'

export const useProtectPage = () => {
 const navigate = useNavigate()

 useEffect(() => {
     const token = localStorage.getItem("token")
             if(!token){
             navigate("/login")
        }
    }, [])
   }
     
     