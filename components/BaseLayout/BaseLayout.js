import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { ModalProvider } from 'react-simple-modal-provider';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import OpenProject from '../Modals/NewProject';
import ConnectionModal from '../Modals/WalletModal';
import Sidebar from '../Sidebar/Sidebar'

export default function BaseLayout({ children, title, footer }) {
    const [sideBar, setSideBar] = useState(true);


    useEffect(() => {
        if (window.innerWidth < 768) {
            setSideBar(false)
        }
    }, [])

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
    return (
        <ModalProvider value={[ConnectionModal, OpenProject]}>

            <Head>
                <title>{title}</title>
            </Head>
            <div className='dark:bg-primary h-[75px] pr-10 top-0 fixed w-full z-50'>
                <Header toggleSidebar={handleSideBar} />
            </div>
            <div className='flex w-full bg-lightWhite dark:bg-fields mt-[75px]'>
                <div className='hidden md:block md:w-[120px] fixed h-screen z-10'>
                    <Sidebar handleSideBar={handleSideBar} toggleSidebar={handleSideBar} />
                </div>
                {sideBar &&
                    <div className={`md:hidden dark:bg-primary w-[120px] h-screen fixed top-[75px] ease-in-out duration-300  -ml-28 z-50 ${sideBar?"delay-100 translate-x-28":""}`}>
                        <Sidebar handleSideBar={handleSideBar} toggleSidebar={handleSideBar} />
                    </div>
                }
                <div className={`w-full pr-2 flex flex-col ${footer ? "justify-between" : ""} min-h-screen md:pl-10 ease-in-out md:z-40 md:pr-0 md:mr-10  bg-lightWhite dark:bg-fields relative duration-300 ${sideBar ? "md:translate-x-[200px] md:!w-[calc(100%-300px)] md:mr-20" : ""}`}>
                    {children}
                    {footer && <Footer />}
                </div>
            </div>
        </ModalProvider>

    )
}
