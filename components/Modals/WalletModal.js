import React, { useEffect } from 'react'
import Modal, { useModalState } from 'react-simple-modal-provider'

import { wallets } from '@/data/wallets'
import Image from 'next/image'

export default function ConnectionModal({ children }) {
    const [isOpen, setOpen] = useModalState()
   
  

    return (
        <Modal id={'ConnectionModal'} consumer={children} isOpen={isOpen} setOpen={setOpen}>
            <div className="p-9 w-[90%] max-w-[520px] bg-white dark:bg-dark-1 rounded-[10px] mx-auto">
                <div className="flex justify-between items-center  ">
                    <span className="text-dark-text dark:text-light-text font-gilroy font-semibold text-lg">Connect Wallet</span>

                    <div className="flex items-center cursor-pointer" onClick={() => setOpen(false)}>
                        <span className="text-sm font-gilroy font-semibold text-dark-text dark:text-light-text mr-2">Close</span>
                        <div className="flex justify-center items-center bg-[#E56060] text-[#E56060] bg-opacity-10 rounded-full w-[15px] h-[15px]">
                            &#10005;
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-2 gap-8">
                    {/* Metamask */}
                    <button
                        className="flex focus:outline outline-primary-green py-4 px-4 flex-col items-center justify-center"
                        key={wallets[0].id}
                    >
                        <Image src={wallets[0].image} alt={wallets[0].name} width={50} height={50} className="mb-4" />
                        <span className="font-gilroy font-semibold text-dark-text dark:text-light-text">{wallets[0].name}</span>
                    </button>
                    <button
                        className="flex focus:outline outline-primary-green py-4 px-4 flex-col items-center justify-center"
                        key={wallets[1].id}
                    >
                        <Image src={wallets[1].image} alt={wallets[1].name} width={50} height={50} className="mb-4" />
                        <span className="font-gilroy font-semibold text-dark-text dark:text-light-text">{wallets[1].name}</span>
                    </button>
                </div>

                <div className="flex justify-center mt-12">
                    <span className="text-gray dark:text-gray-dark font-semibold font-gilroy">
                        Haven’t got a crypto wallet yet?
                    </span>
                </div>

                <div className="flex justify-center mt-5">
                    <span className="text-primary-green font-semibold font-gilroy">Learn how to connect</span>
                </div>
            </div>
        </Modal>
    )
}
