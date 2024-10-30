import  { useContext } from 'react'
import { Sidebar } from "flowbite-react";

import userImg from "../assets/banner-items/yo.png"
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { AuthContext } from '../contects/AuthProvider';
export const SideBar = () => {
  const {user}=useContext(AuthContext)
  console.log(user);
  return (
    <div >
    <Sidebar aria-label="Sidebar with content separator example" >
    <Sidebar.Logo href="/" img={user?.photoURL || userImg} imgAlt="" className="rounded w-16 h-16 ">
    <h1 className='campus text-2xl'>{user?.displayName || "User"}</h1 >
</Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup >
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="dashboardcolor text-white">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} >
            Upload Items
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="dashboardcolor text-white">
           Manage Items
          </Sidebar.Item>
       
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className="dashboardcolor text-white">
            Sign In
          </Sidebar.Item>

          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        {/* <Sidebar.ItemGroup>
         
          <Sidebar.Item href="/blog" icon={HiViewBoards} className="dashboardcolor text-white">
            Blog
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}
