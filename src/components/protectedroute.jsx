import { Navigate } from "react-router-dom"
import {UserAuth} from "../context/authentication"

const Protectedroute = ({children}) => {
     const {user} = UserAuth()

     if(!user){
          return <Navigate to='/' />
       }else{
          return children;
       }
}
export default Protectedroute