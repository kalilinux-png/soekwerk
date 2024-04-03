import React from 'react'
import { sidebarMenu } from '../utility/Constant'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className='custom-scrollbar w-[16rem] overflow-y-auto h-[100vh]'>
          <div className="menu h-full flex flex-col justify-between">
            <div>
              {/* Render the first three items */}
              {sidebarMenu.slice(0, 3).map((element) => (
                <ul key={element.path}>
                  <li>
                    <Link to={element.path}>
                      <div className='flex items-center gap-3 uppercase text-[1.1rem] border-b border-[#ccc] py-3 px-3'>
                        <span className='text-[1.3rem] text-[#78909c]'>{element.icon}</span>
                        <span>{element.menuItem}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>

            <div>
              {/* Render the last two items */}
              {sidebarMenu.slice(3).map((element) => (
                <ul key={element.path}>
                  <li>
                    <Link to={element.path}>
                      <div className='flex items-center gap-3 uppercase text-[1.1rem] border-b border-[#ccc] py-3 px-3'>
                        <span className='text-[1.3rem] text-[#78909c]'>{element.icon}</span>
                        <span>{element.menuItem}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar