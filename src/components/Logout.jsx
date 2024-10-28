import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'

export const Logout = () => {
    const {logOut}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from =location.state?.from?.pathname||"/"
    const handleLogout=()=>{
        logOut().then(()=>{
            alert("Logout successfully!");
            navigate(from, {replace:true})
        }).catch((error)=>{

        });

    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button onClick={handleLogout} className='bg-red-500 px-8 text-white rounded py-2'>Logout</button>
    </div>
  )
}
