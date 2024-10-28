import  { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import {Spinner} from 'flowbite-react'
export const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <div className='text-center'>
            <Spinner arial-label="Center-aligned spinner example"/>

        </div>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from:location}} replace></Navigate>
  )
}
