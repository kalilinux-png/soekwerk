import { FaHome } from "react-icons/fa";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export const sidebarMenu = [
  {
    menuItem: 'dashboard',
    icon: <FaHome />,
    path: '/dashboard'
  },
  {
    menuItem: 'create listing',
    icon: <BiSolidDoughnutChart />,
    path: '/create_listing'
  },
  {
    menuItem: 'users',
    icon: <IoBarChart />,
    path: '/users'
  },
  {
    menuItem: 'profile staffs',
    icon: <IoMdSettings />,
    path: '/profile_staffs'
  },
  {
    menuItem: 'profile settings',
    icon: <IoMdSettings />,
    path: '/profile_settings'
  },
]
