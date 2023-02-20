import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BaseLogo from '../BaseLogo/BaseLogo'

export default function Sidebar({ active, toggleSidebar }) {
    const [openSub1, setOpenSub1] = useState(false)
    const [openSub2, setOpenSub2] = useState(false)

    return (
        <div className='h-screen w-full overflow-y-scroll font-nunito_sans bg-white dark:bg-primary'>
            <div className="w-full flex justify-start ml-2 items-center my-5 mt-10">
                <span className="brand">
                    <BaseLogo />
                </span>
            </div>
            <div className="menu-items ml-5">
                <div className="w-full h-[60px]">
                    <a onClick={toggleSidebar} className="flex cursor-pointer flex-row items-center h-full justify-start">
                        <Image width={20} height={20} src="/images/sidebar/side1.png" alt='sidebar-item-icon'

                        />
                        <span className="font-extrabold text-[#57534E] text-base ml-5">Menu</span>
                    </a>
                </div>
                <div className="w-full h-[60px]">
                    <Link href="/" className="flex flex-row items-center h-full justify-start">
                        <Image width={20} height={20} src="/images/sidebar/side2.png" alt='sidebar-item-icon'/>
                        <span className="font-extrabold text-[#57534E] text-base ml-5">Home</span>
                    </Link>
                </div>
                <div className="w-full h-[60px]">
                    <div className="flex flex-row items-center h-full justify-start">
                        <a href="/developers/registration">
                            <Image width={20} height={20} src="/images/sidebar/side3.png" alt='sidebar-item-icon'/>
                        </a>
                        <div  className="flex items-center cursor-pointer">
                            <span className="font-extrabold text-[#57534E] text-base ml-5 flex flex-row items-center"
                            onClick={()=>setOpenSub1(!openSub1)}>
                                Developers
                                <svg width="11" height="6" viewBox="0 0 11 6" className={`ml-5 dark:fill-[#57534E] ease-in-out duration-200 ${openSub1? "":"rotate-180"}`} xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.371299 5.67718C0.471681 5.77952 0.590872 5.86071 0.72206 5.9161C0.853249 5.97149 0.993864 6 1.13587 6C1.27788 6 1.41849 5.97149 1.54968 5.9161C1.68087 5.86071 1.80006 5.77952 1.90044 5.67718L5.20518 2.31078C5.27275 2.24195 5.36438 2.20329 5.45992 2.20329C5.55546 2.20329 5.64709 2.24195 5.71466 2.31078L9.01867 5.67718C9.22135 5.88378 9.49629 5.99989 9.78299 5.99996C10.0697 6.00003 10.3447 5.88405 10.5475 5.67755C10.7502 5.47104 10.8642 5.19091 10.8643 4.8988C10.8643 4.60668 10.7505 4.3265 10.5478 4.1199L7.24308 0.752762C7.00887 0.514108 6.73082 0.324797 6.4248 0.195637C6.11878 0.0664778 5.79079 -4.51356e-07 5.45956 -4.80824e-07C5.12832 -5.10292e-07 4.80033 0.0664777 4.49431 0.195637C4.18829 0.324797 3.91024 0.514108 3.67604 0.752761L0.371299 4.1199C0.168657 4.32643 0.0548192 4.6065 0.0548192 4.89854C0.0548192 5.19057 0.168657 5.47065 0.371299 5.67718Z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                {openSub1 && (
                    <div>
                <div className="w-full h-[60px] sidebarsub">
                    <a href="/developers/registration" className="flex flex-row items-center h-full justify-start">
                        <span className="font-extrabold text-[#57534E] text-base ml-[35px]">Registration</span>
                    </a>
                </div>
                <div className="w-full h-[60px]">
                    <a onClick={()=>setOpenSub2(!openSub2)} className={`flex flex-row cursor-pointer items-center h-full justify-start `}>
                        <span className="font-extrabold text-[#57534E] text-base ml-[35px] flex flex-row items-center">
                            Charts
                            <svg width="11" height="6" viewBox="0 0 11 6" className={`ml-5 dark:fill-[#57534E] ease-in-out duration-200 ${openSub2? "":"rotate-180"}`} xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.371299 5.67718C0.471681 5.77952 0.590872 5.86071 0.72206 5.9161C0.853249 5.97149 0.993864 6 1.13587 6C1.27788 6 1.41849 5.97149 1.54968 5.9161C1.68087 5.86071 1.80006 5.77952 1.90044 5.67718L5.20518 2.31078C5.27275 2.24195 5.36438 2.20329 5.45992 2.20329C5.55546 2.20329 5.64709 2.24195 5.71466 2.31078L9.01867 5.67718C9.22135 5.88378 9.49629 5.99989 9.78299 5.99996C10.0697 6.00003 10.3447 5.88405 10.5475 5.67755C10.7502 5.47104 10.8642 5.19091 10.8643 4.8988C10.8643 4.60668 10.7505 4.3265 10.5478 4.1199L7.24308 0.752762C7.00887 0.514108 6.73082 0.324797 6.4248 0.195637C6.11878 0.0664778 5.79079 -4.51356e-07 5.45956 -4.80824e-07C5.12832 -5.10292e-07 4.80033 0.0664777 4.49431 0.195637C4.18829 0.324797 3.91024 0.514108 3.67604 0.752761L0.371299 4.1199C0.168657 4.32643 0.0548192 4.6065 0.0548192 4.89854C0.0548192 5.19057 0.168657 5.47065 0.371299 5.67718Z" />
                            </svg>
                        </span>
                    </a>
                </div>
                {openSub2 && (
                    <div>
                        <div className="w-full h-[60px] sidebarsub">
                            <Link href="/developers/charts" className="flex flex-row items-center h-full justify-start">
                                <span className="font-extrabold text-[#57534E] text-base ml-[35px]">Current Charts</span>
                            </Link>
                        </div>
                        <div className="w-full h-[60px] sidebarsub">
                            <Link href="/developers/charts" className="flex flex-row items-center h-full justify-start">
                                <span className="font-extrabold text-[#57534E] text-base ml-[35px]">Previous Charts</span>
                            </Link>
                        </div>
                    </div>
                )}
                <div className="w-full h-[60px] sidebarsub">
                    <Link href="/developers/overview" className="flex flex-row items-center h-full justify-start">
                        <span className="font-extrabold text-[#57534E] text-base ml-[35px]">Developer Ranking</span>
                    </Link>
                </div>
                </div>
                )}
                <div className="w-full h-[60px]">
                    <div className="flex flex-row items-center h-full justify-start" >
                        <Link href="/kyc_audit">
                            <Image width={20} height={20} src="/images/sidebar/side4.png" alt='sidebar-item-icon'/>
                        </Link>
                        <span className="font-extrabold text-[#57534E] text-base ml-5">KYC & Audit</span>
                    </div>
                </div>
                <div className="w-full h-[60px]">
                    <div className="flex flex-row items-center h-full justify-start">
                        <Link href="/reviews">
                            <Image width={20} height={20} className="h-[20px] w-[20px]" src="/images/sidebar/side5.png" alt='sidebar-item-icon' />
                        </Link>
                        <span className="font-extrabold text-[#57534E] text-base ml-5">Reviews</span>
                    </div>
                </div>
                <div className="w-full h-[60px]">
                    <div className="flex flex-row items-center h-full justify-start">
                        <Link href="/map">
                            <Image width={20} height={20} className="h-[20px] w-[20px]" src="/images/sidebar/side6.png" alt='sidebar-item-icon' />
                        </Link>
                        <span className="font-extrabold text-[#57534E] text-base ml-5">Bubble Map</span>
                    </div>
                </div>
                <div className="w-full h-[60px]">
                    <a className="flex flex-row items-center h-full justify-start">
                        <Image width={20} height={20} className="h-[20px] w-[20px]" src="/images/sidebar/side7.png" alt='sidebar-item-icon' />
                        <span className="font-extrabold text-[#57534E] text-base ml-5">Scan for scammer</span>
                    </a>
                </div>
                <div className="w-full h-[60px]">
                    <a className="flex flex-row items-center h-full justify-start">
                        <Image width={20} height={20} className="h-[20px] w-[20px]" src="/images/sidebar/side8.png" alt='sidebar-item-icon' />
                        <span className="font-extrabold text-[#57534E] text-base ml-5">Buy Bot</span>
                    </a>
                </div>
            </div>

        </div>
    )
}
