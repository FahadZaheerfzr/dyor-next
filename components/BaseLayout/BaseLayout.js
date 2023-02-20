import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

export default function BaseLayout({ children, footer }) {
    const [sideBar, setSideBar] = useState(true);

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
    return (
        <div className='flex w-full bg-lightWhite dark:bg-fields   '>
            <div className='hidden md:block md:w-[250px] fixed h-screen  z-10'>
                <Sidebar toggleSidebar={handleSideBar} />
            </div>
            {sideBar &&
            <div className='md:hidden dark:bg-primary w-[250px] h-screen fixed top-0 z-50'>
                <Sidebar toggleSidebar={handleSideBar} />
            </div>
            }
            <div className={`w-full pr-2 flex flex-col justify-between min-h-screen md:pl-10 ease-in-out md:z-50 md:pr-0 md:mr-10 md:ml-[60px] bg-lightWhite dark:bg-fields relative duration-300 ${sideBar ? "" : "md:translate-x-[200px] md:!w-[calc(100%-300px)] md:mr-20"}`}>
                <Header toggleSidebar={handleSideBar} />
                {children}
                {footer && <Footer />}
            </div>
        </div>
    )
}
