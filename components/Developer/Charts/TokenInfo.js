import { Config } from '@/config/constants/config';
import React, { useEffect } from 'react'
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
export default function TokenInfo({ contract_address }) {


    const runMoralis = async () => {
        // await Moralis.start({
        //     apiKey: Config.API_KEY,
        //     // ...and any other configuration
        // });

        const chain = EvmChain.ETHEREUM;

        // token 0 address, e.g. WETH token address
        const token0Address = contract_address;

        // token 1 address, e.g. LINK token address
        const token1Address = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";

        const response = await Moralis.EvmApi.defi.getPairAddress({
            token0Address,
            token1Address,
            chain,
        });

        console.log(response.toJSON());
    };

    useEffect(() => {
        try {
            runMoralis()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
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
    )
}


