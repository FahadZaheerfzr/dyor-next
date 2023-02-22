import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useModal } from 'react-simple-modal-provider'

export default function Header({ toggleSidebar }) {
    const { theme, setTheme } = useTheme()
    const [tempfixed, setTempFixed] = React.useState(false)
    const { open: openModal } = useModal("ConnectionModal");



    useEffect(() => {
        if (theme === 'dark') {
            setTempFixed(false)
        } else {
            setTempFixed(true)
        }
    }, [theme])

    const handleTempFixed = () => {
        setTempFixed(!tempfixed)
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }




    return (
        <header className="flex justify-between md:justify-end pt-5">

            <div className='md:hidden pl-5'>
                <div className="w-full h-[60px]">
                    <a onClick={toggleSidebar} className="flex cursor-pointer flex-row items-center h-full justify-start">
                        <Image width={30} height={30} src="/images/sidebar/side1.png" alt='sidebar-item-icon' />
                    </a>
                </div>
            </div>

            <div className='flex'>
                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer mr-5">
                    <input
                        type="checkbox"
                        value=""
                        checked={tempfixed ? false : true}
                        id="default-toggle"
                        className="sr-only peer"
                        onChange={handleTempFixed}
                    />
                    <div className="w-10 h-6 bg-transparent peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-gold after:content-[''] after:absolute after:top-[22px] after:md:top-[12px] after:left-[2px] peer-checked:after:left-[6px] after:bg-gold after:border-gold after:border after:rounded-full after:h-4 after:w-4 after:transition-all border border-gold" />
                </label>
                <div className='cursor-pointer' onClick={openModal}>
                    {!tempfixed ?
                        <Image className="brand-image" src="/images/wallet.svg" alt='logo' width={40} height={40} />
                        :
                        <Image className="brand-image" src="/images/wallet-light.svg" alt='logo' width={40} height={40} />
                    }
                </div>
            </div>
        </header>
    )
}
