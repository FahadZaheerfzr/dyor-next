import { ethers } from 'ethers';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import CustomChart from './TradingView';
import ERC_ABI from '@/config/abi/ERC20.json'
import { useEthers } from '@usedapp/core'
import { useModal } from 'react-simple-modal-provider';

export default function Charts() {
    const { library } = useEthers();
    const { theme } = useTheme();
    const [profile, setProfile] = useState(true)
    const [currentCharts, setCurrentCharts] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const [tablemenu, setTableMenu] = useState(false)
    const graph = useRef(null)
    const [image, takeScreenShot] = useScreenshot();
    const [symbol, setSymbol] = useState("")
    const [projects, setProjects] = useState()
    const getImage = () => takeScreenShot(graph.current);
    const { open: openModal } = useModal("OpenProject");

    const handleSymbol = async () => {
        try {
            let signer = await library.getSigner("0xd302f9AA2a57eA2516835A6e36CC168ae0365B37");
            let contract = new ethers.Contract("0xdd534480782ecf53e4a5257b0f3c37702a0bad61", ERC_ABI, signer)
            let symbol = await contract.symbol()
            setSymbol(`${symbol}/BNB`)
        } catch (err) {
            setSymbol("DOGE")
            console.log(err)
        }

    }

    useEffect(() => {
        if (library) {
            handleSymbol()
        }
    }, [library])



    useEffect(() => {
        getImage()
    }, [theme])

    const toggleProfile = (bool) => {
        setProfile(bool)
    }

    const toggleCurrentCharts = (bool) => {
        setCurrentCharts(bool)
    }


    const toggleMenu = (bool) => {
        setMenuOpen(bool)
    }

    const toggleTableMenu = (bool) => {
        setTableMenu(bool)
    }

    const toggleMenuProfile = () => {
        toggleMenu(false);
        toggleProfile(true);
    }


    return (
        <main className="workspace font-nunito">
            <section className="breadcrumb">
                <h1 className='text-[32px] text-muted'>DOGE your own research</h1>
                <ul className='text-[#57534E] text-sm flex mb-4'>
                    <li><a href="#">Home</a></li>
                    <Image width={12} height={10} className="mx-2" src="/images/arrow.svg" alt="arrow" />

                    <li><a href="#">Developers</a></li>
                    <Image width={12} height={10} className="mx-2" src="/images/arrow.svg" alt="arrow" />

                    <li className='text-muted'>Charts</li>
                </ul>
            </section>
            <div className="card !bg-[#F9F9F9] dark:!bg-[#292524] py-10 mt-5 mb-10 hidden lg:block">
                <div className="grid grid-rows-4">
                    <div className=" row-span-4">
                        <div className="grid grid-cols-10">
                            <div className=" col-span-3">
                                <div className="grid grid-rows-5">
                                    <div className=" row-span-3 h-full w-full flex justify-end items-center">
                                        <div className=" rounded-3xl !bg-white dark:!bg-[#1C1917] w-[90%]">
                                            <div className="flex flex-row justify-around items-center mt-5">
                                                <div>
                                                    <img className="" src="/images/Vector.png" />
                                                </div>
                                                <div className="flex flex-col justify-center text-center">
                                                    <img src="/images/profile-pic.png" />
                                                    <span className="mt-3 font-extrabold text-gold text-xl">PimkFale</span>
                                                    <span className="text-sm font-semibold text-[#57534E]">@pimkfale</span>
                                                </div>
                                                <div>
                                                    <img src="/images/more.png" />
                                                </div>
                                            </div>
                                            <div className="px-10 my-5 flex flex-col">
                                                <span className="text-xl font-extrabold text-[#292524]">About</span>
                                                <span className="text-[12px] font-normal text-[#57534E] dark:text-[#292524]">If
                                                    we can imagine web3 as a car then, web3 libraries/dApps are the car&apos;s
                                                    chassis, smart contracts/blockchain are the internal hardware
                                                    components, wallets.. <span className="text-gold">read more</span></span>
                                            </div>

                                            <div className="px-10 my-5 flex flex-col">
                                                <button className="bg-gold text-white font-semibold py-2 px-4 rounded-full"
                                                onClick={openModal}>
                                                    Open a New Project
                                                </button>
                                            </div>
                                            <div className="px-7 my-10 flex flex-row justify-between ">
                                                <div className="flex flex-row items-center">
                                                    <img className="mr-2 dark:hidden" src="/images/twitter.svg" />
                                                    <img className="mr-2 hidden dark:block" src="/images/twitter.png" />
                                                    <span
                                                        className="text-sm font-semibold text-[#57534E]">@pimkfalecomunity</span>
                                                </div>
                                                <div className="flex flex-row items-center">
                                                    <img className="mr-2 dark:hidden" src="/images/telegram.svg" />
                                                    <img className="mr-2 hidden dark:block" src="/images/telegram.png" />
                                                    <span className="text-sm font-semibold text-[#57534E]">@pimkfaleee</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" row-span-2 h-full w-full flex justify-end items-end">
                                        <div className="rounded-2xl !bg-white dark:!bg-[#1C1917] w-[90%] relative p-5">
                                            <div className="mb-5">
                                                <span className=" font-extrabold text-sm text-[#78716C]">PANCAKESWAP V2 POOL
                                                    INFO</span>
                                            </div>
                                            <div className="mb-10">
                                                <div className="grid grid-cols-2 mb-2">
                                                    <span className="text-xs font-semibold text-[#292524] col-span-1">Total
                                                        liquidity:</span>
                                                    <span
                                                        className=" text-[#78716C] text-xs font-normal col-span-1">$3.27k</span>
                                                </div>
                                                <div className="grid grid-cols-2 mb-2">
                                                    <span className="text-xs font-semibold text-[#292524] col-span-1">24h
                                                        volume:</span>
                                                    <span
                                                        className=" text-[#78716C] text-xs font-normal col-span-1">$109.33</span>
                                                </div>
                                                <div className="grid grid-cols-2 mb-2">
                                                    <span className="text-xs font-semibold text-[#292524] col-span-1">Pooled
                                                        WBNB:</span>
                                                    <span className=" text-[#78716C] text-xs font-normal col-span-1">4.65</span>
                                                </div>
                                                <div className="grid grid-cols-2 mb-2">
                                                    <span className="text-xs font-semibold text-[#292524] col-span-1">Pooled
                                                        DYOR:</span>
                                                    <span
                                                        className=" text-[#78716C] text-xs font-normal col-span-1">88.99M</span>
                                                </div>
                                                <div className="grid grid-cols-2 mb-2">
                                                    <span className="text-xs font-semibold text-[#292524] col-span-1">Total
                                                        tx:</span>
                                                    <span
                                                        className=" text-[#78716C] text-xs font-normal col-span-1">8.27K</span>
                                                </div>
                                                <div className="grid grid-cols-2 mb-2">
                                                    <span className="text-xs font-semibold text-[#292524] col-span-1">Total
                                                        Market Cap:</span>
                                                    <span
                                                        className=" text-[#78716C] text-xs font-normal col-span-1">$1.82K</span>
                                                </div>
                                            </div>
                                            <div
                                                className="group absolute bottom-0 left-0 py-2 w-full bg-gold flex flex-row items-center justify-center rounded-b-2xl">
                                                <span className="text-sm font-extrabold text-white dark:text-[#1C1917]">More Info</span>
                                                <span className="relative ml-1">
                                                    <div className="dark:hidden">
                                                        <img className="group-hover:hidden"
                                                            src="/images/arrow_right.svg" />
                                                        <img className="hidden group-hover:inline"
                                                            src="/images/arrow_left.svg" />
                                                    </div>
                                                    <div className="hidden dark:block">
                                                        <img className="group-hover:hidden"
                                                            src="/images/arrow_right.png" />
                                                        <img className="hidden group-hover:inline"
                                                            src="/images/arrow_left.png" />
                                                    </div>
                                                    <div
                                                        className="hidden absolute top-[-35px] z-30 left-[30px] w-[190px] !bg-white dark:!bg-[#1C1917] rounded-2xl text-xs !text-[#78716C] dark:!text-[#292524] font-extrabold group-hover:flex flex-col pl-3 py-3">
                                                        <span className="mt-2">Initial LP</span>
                                                        <span className="mt-1">MAX Xs at ATH</span>
                                                        <span className="mt-1">Holders</span>
                                                        <span className="mt-1 mb-2">ETC</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-span-7 px-8 h-full w-full flex justify-center items-center" >
                                <div className='h-full w-full flex justify-center items-center  dark:bg-primary' ref={graph}>
                                    {symbol !== "" && <CustomChart symbol={symbol} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {projects &&
                        <div className=" row-span-2 my-10">
                            <div className="grid grid-cols-4 gap-3">
                                <div className="col-span-1 h-full w-full flex justify-center items-center">
                                    <div className="p-5 " id="small-graph">
                                        {image && <Image src={image} width={200} height={200} alt="graph-image" />}
                                    </div>
                                </div>
                                <div className="col-span-1 h-full w-full flex justify-center items-center">
                                    <div className="p-5" id="small-graph1">
                                        {image && <Image src={image} width={200} height={200} alt="graph-image" />}

                                    </div>
                                </div>
                                <div className="col-span-1 h-full w-full flex justify-center items-center">
                                    <div className="p-5" id="small-graph2">
                                        {image && <Image src={image} width={200} height={200} alt="graph-image" />}

                                    </div>
                                </div>
                                <div className="col-span-1 h-full w-full flex justify-center items-center">
                                    <div className="p-5" id="small-graph3">
                                        {image && <Image src={image} width={200} height={200} alt="graph-image" />}

                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                <div className="w-full mt-14 flex justify-center items-center">
                    <button className=" rounded-3xl bg-white dark:bg-[#1C1917] text-[#292524] text-xs font-bold uppercase py-2 px-5 infobox-shadow"
                        onClick={handleSymbol}>
                        See More
                    </button>
                </div>
            </div>

            <div className="card !bg-[#F9F9F9] dark:!bg-[#292524] py-10 mt-[50px] mb-10 lg:hidden flex items-center justify-center relative">
                <div className="absolute top-[-30px] w-full h-[70px] flex flex-row ">
                    <div onClick={toggleMenuProfile} className={`w-[50%] rounded-t-3xl  h-full flex justify-center ${!profile ? 'bg-[#F2F2F1] dark:bg-[#1E1916]' : "bg-[#F9F9F9] dark:bg-[#292524]"}`} >
                        <span className="text-[#57534E] font-semibold text-[25px] mt-6">Profile</span>
                    </div>
                    <div className={`w-[50%] rounded-t-3xl h-full flex flex-row justify-center relative ${profile ? 'bg-[#F2F2F1] dark:bg-[#1E1916]' : "bg-[#F9F9F9] dark:bg-[#292524]"}`}>
                        <div onClick={() => toggleMenu(true)} className="flex flex-row">
                            <span className="text-[#57534E] font-semibold text-[25px] mt-6">{profile ? "Charts" : currentCharts ? "Current" : "Previous"}</span>
                            <img className="ml-2 w-[14px] h-[8px] mt-8" src="/images/mobile/arrow-down.png" />
                        </div>
                        <div className={`w-full absolute top-0 right-0 !rounded-t-3xl rounded-b-3xl flex flex-col z-50 ${menuOpen ? 'block' : "hidden"}`} >
                            <div onClick={() => toggleMenu(false)} className="w-full h-[60px] bg-[#F9F9F9] dark:bg-[#292524] flex flex-row justify-center items-center">
                                <span className="text-[#57534E] font-semibold text-[25px]">Charts</span>
                                <img className="ml-2 w-[14px] h-[8px]" src="/images/mobile/arrow-up.png" />
                            </div>
                            <div onClick={() => { toggleCurrentCharts(true); toggleProfile(false); toggleMenu(false) }} className="w-full h-[60px] bg-[#F2F2F1] dark:bg-[#282423] flex flex-row justify-center items-center">
                                <span className="text-[#393532] font-semibold text-[25px]">Current</span>
                                <img className="ml-2 w-[14px] h-[8px]" src="/images/mobile/current.png" />
                            </div>
                            <div onClick={() => { toggleCurrentCharts(false); toggleProfile(false); toggleMenu(false) }} className="w-full h-[60px] bg-[#F2F2F1] dark:bg-[#282423] flex flex-row justify-center items-center">
                                <span className="text-[#393532] font-semibold text-[25px]">Previous</span>
                                <img className="ml-2 w-[14px] h-[8px]" src="/images/mobile/previous.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={` rounded-3xl !bg-[#F9F9F9] dark:!bg-[#292524] w-full max-w-[550px] mt-10 ${profile ? "block" : "hidden"}`} >
                    <div className="flex flex-row justify-around items-center mt-5">
                        <div>
                            <img className="dark:hidden" src="/images/mobile/shareicon-light.png" />
                            <img className="hidden dark:block" src="/images/mobile/shareicon-dark.png" />
                        </div>
                        <div className="flex flex-col justify-center text-center">
                            <img src="/images/profile-pic.png" />
                            <span className="mt-3 font-extrabold text-gold text-xl">PimkFale</span>
                            <span className="text-sm font-semibold text-[#57534E]">@pimkfale</span>
                        </div>
                        <div>
                            <img className="dark:hidden" src="/images/mobile/menuicon-light.png" />
                            <img className="hidden dark:block" src="/images/mobile/menuicon-dark.png" />
                        </div>
                    </div>
                    <div className="px-10 my-5 flex flex-col">
                        <span className="text-xl font-extrabold text-[#292524]">About</span>
                        <span className="text-[12px] font-normal text-[#57534E] dark:text-[#78716C]">If
                            we can imagine web3 as a car then, web3 libraries/dApps are the car&apos;s
                            chassis, smart contracts/blockchain are the internal hardware
                            components, wallets.. <span className="text-gold">read more</span></span>
                    </div>
                    <div className="px-7 my-10 flex flex-row justify-between ">
                        <div className="flex flex-row items-center">
                            <img className="mr-2 dark:hidden" src="/images/twitter.svg" />
                            <img className="mr-2 hidden dark:block" src="/images/twitter.png" />
                            <span
                                className="text-sm font-semibold text-[#57534E]">@pimkfalecomunity</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <img className="mr-2 dark:hidden" src="/images/telegram.svg" />
                            <img className="mr-2 hidden dark:block" src="/images/telegram.png" />
                            <span className="text-sm font-semibold text-[#57534E]">@pimkfaleee</span>
                        </div>
                    </div>
                </div>

                <div className={` !bg-[#F9F9F9] dark:!bg-[#292524] w-full mt-10 flex flex-col p-5 ${!profile && currentCharts ? "block" : "hidden"}`}>
                    <div className="w-full">
                        <div className=" my-5" >
                            <img className="hidden dark:block" src="/images/mobile/graph.png" />
                            <img className="dark:hidden" src="/images/mobile/graph-white.png" />
                        </div>
                    </div>
                    <div className="rounded-3xl !bg-white dark:!bg-[#1C1917] w-full relative p-5">
                        <div className="mb-5">
                            <span className=" font-extrabold text-sm text-[#78716C]">PANCAKESWAP V2 POOL
                                INFO</span>
                        </div>
                        <div className="mb-10">
                            <div className="grid grid-cols-2 mb-2">
                                <span className="text-xs font-semibold text-[#292524] col-span-1">Total
                                    liquidity:</span>
                                <span
                                    className=" text-[#78716C] text-xs font-normal col-span-1">$3.27k</span>
                            </div>
                            <div className="grid grid-cols-2 mb-2">
                                <span className="text-xs font-semibold text-[#292524] col-span-1">24h
                                    volume:</span>
                                <span
                                    className=" text-[#78716C] text-xs font-normal col-span-1">$109.33</span>
                            </div>
                            <div className="grid grid-cols-2 mb-2">
                                <span className="text-xs font-semibold text-[#292524] col-span-1">Pooled
                                    WBNB:</span>
                                <span className=" text-[#78716C] text-xs font-normal col-span-1">4.65</span>
                            </div>
                            <div className="grid grid-cols-2 mb-2">
                                <span className="text-xs font-semibold text-[#292524] col-span-1">Pooled
                                    DYOR:</span>
                                <span
                                    className=" text-[#78716C] text-xs font-normal col-span-1">88.99M</span>
                            </div>
                            <div className="grid grid-cols-2 mb-2">
                                <span className="text-xs font-semibold text-[#292524] col-span-1">Total
                                    tx:</span>
                                <span
                                    className=" text-[#78716C] text-xs font-normal col-span-1">8.27K</span>
                            </div>
                            <div className="grid grid-cols-2 mb-2">
                                <span className="text-xs font-semibold text-[#292524] col-span-1">Total
                                    Market Cap:</span>
                                <span
                                    className=" text-[#78716C] text-xs font-normal col-span-1">$1.82K</span>
                            </div>
                        </div>
                        <div
                            onClick={() => toggleTableMenu(!tablemenu)}
                            className="group absolute bottom-0 left-0 py-2 w-full bg-gold flex flex-row items-center justify-center rounded-b-2xl">
                            <span className="text-xs font-extrabold text-white dark:text-[#1C1917]">More
                                Info</span>
                            <span className="hidden dark:block ml-1">
                                <img className={`h-[8px] w-[10px] ${!tablemenu ? "block" : "hidden"}`}
                                    src="/images/mobile/arrow-down.png" />
                                <img className={`h-[8px] w-[10px] ${tablemenu ? "block" : "hidden"}`}
                                    src="/images/mobile/arrow-up-black.png" />
                            </span>
                            <span className="dark:hidden ml-1 ">
                                <img className={`h-[8px] w-[10px] ${tablemenu ? "rotate-180" : ""}`} src="/images/mobile/arrow-down-light.png" />
                            </span>
                        </div>
                    </div>
                    <div
                        className={`w-[350px] !bg-white dark:!bg-[#1C1917] rounded-2xl text-xs !text-[#78716C] dark:!text-[#292524] font-extrabold flex flex-col pl-3 py-3 mt-10 ${tablemenu ? "block" : "hidden"}`}>
                        <span className="mt-2">Initial LP</span>
                        <span className="mt-1">MAX Xs at ATH</span>
                        <span className="mt-1">Holders</span>
                        <span className="mt-1 mb-2">ETC</span>
                    </div>
                </div>

                <div className={` !bg-[#F9F9F9] dark:!bg-[#292524] w-full  mt-10 flex flex-col p-5 ${!profile && !currentCharts ? "block" : "hidden"}`} >
                    <div className="w-full my-5">
                        <div >
                            <img className="hidden dark:block" src="/images/mobile/graph.png" />
                            <img className="dark:hidden" src="/images/mobile/graph-white.png" />
                        </div>
                    </div>
                    <div className="w-full my-5">
                        <div >
                            <img className="hidden dark:block" src="/images/mobile/graph.png" />
                            <img className="dark:hidden" src="/images/mobile/graph-white.png" />
                        </div>
                    </div>
                    <div className="w-full my-5">
                        <div >
                            <img className="hidden dark:block" src="/images/mobile/graph.png" />
                            <img className="dark:hidden" src="/images/mobile/graph-white.png" />
                        </div>
                    </div>
                    <div className="w-full my-5">
                        <div >
                            <img className="hidden dark:block" src="/images/mobile/graph.png" />
                            <img className="dark:hidden" src="/images/mobile/graph-white.png" />
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
