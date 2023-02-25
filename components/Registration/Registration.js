import { toBase64 } from '@/utils/FileHandler'
import axios from 'axios'
import { ethers } from 'ethers'
import Image from 'next/image'
import React, { useState } from 'react'
import ERC_ABI from '@/config/abi/ERC20.json'
import { useEthers } from '@usedapp/core'
import { useModal } from 'react-simple-modal-provider'
import { registrationFee } from '@/config/constants/registration_constants'


export default function Registration() {
    const { account, library } = useEthers();
    const [file_name, setFileName] = useState('No file Chosen')
    const [errors, setErrors] = useState({})
    const [profile_picture, setProfilePicture] = useState('')
    const [developer_name, setDeveloperName] = useState('')
    const [scam_type, setScamType] = useState('')
    const [developer_wallet, setDeveloperWallet] = useState('')
    const [developer_website, setDeveloperWebsite] = useState('')
    const [developer_telegram, setDeveloperTelegram] = useState('')
    const [developer_twitter, setDeveloperTwitter] = useState('')
    const [telegram_project, setTelegramProject] = useState('')
    const [contract_address, setContractAddress] = useState('')
    const { open: openModal } = useModal("ConnectionModal");



    const updateFileName = (e) => {
        setFileName(e.target.files[0].name)
        toBase64(e.target.files[0]).then((data) => {
            setProfilePicture(data)
        })
    }


    const handleTransfer = async () => {
        if (!account) {
            openModal();
            return;
        }

        let signer = library.getSigner();
        let contract = new ethers.Contract("0x4379FAaAFEf1A8B7e0949f4BD1F5f552fcaA67a0", ERC_ABI, signer);
        const previous_balance = await contract.balanceOf("0xd302f9AA2a57eA2516835A6e36CC168ae0365B37");

        if (previous_balance > registrationFee) {
            try {
                await contract.transfer("0xd302f9AA2a57eA2516835A6e36CC168ae0365B37", 80000000)
                await contract.transfer("0xd302f9AA2a57eA2516835A6e36CC168ae0365B37", 20000000);
            } catch (e) {
                return;
            }
        } else {
            alert("You don't have enough tokens to register");
        }

        
        const res = await axios.post('/api/register', {
            profile_picture: profile_picture,
            developer_name: developer_name,
            developer_about: scam_type,
            developer_wallet: developer_wallet,
            developer_website: developer_website,
            developer_telegram: developer_telegram,
            developer_twitter: developer_twitter,
            telegram_project: telegram_project,
            contract_address: contract_address,
        })



    }

    const checkForm = async (e) => {
        e.preventDefault()
        let errors = {}
        if (developer_name === '') {
            errors.developer_name = 'Developer name is required'
        }
        if (scam_type === '') {
            errors.scam_type = 'Scam type is required'
        }
        if (developer_wallet === '') {
            errors.developer_wallet = 'Developer wallet is required'
        }
        if (developer_website === '') {
            errors.developer_website = 'Developer website is required'
        }
        if (developer_telegram === '') {
            errors.developer_telegram = 'Developer telegram is required'
        }

        if (developer_twitter === '') {
            errors.developer_twitter = 'Developer twitter is required'
        }
        if (telegram_project === '') {
            errors.telegram_project = 'Telegram project is required'
        }
        if (contract_address === '') {
            errors.contract_address = 'Transaction address is required'
        }

        setErrors(errors)
        console.log(errors)
        if (errors !== {}) {
            handleTransfer()
        }
    }

    return (
        <main className="workspace">
            <section className="breadcrumb">
                <h1 className='text-[32px] text-muted'>DOGE your own research</h1>
                <ul className='text-[#57534E] text-sm flex mb-4'>
                    <li><a href="#">Home</a></li>
                    <Image width={12} height={10} className="mx-2 " src="/images/arrow.svg" alt="arrow" />

                    <li><a href="#">Developers</a></li>
                    <Image width={12} height={10} className="mx-2" src="/images/arrow.svg" alt="arrow" />

                    <li className='text-muted'>Registration</li>
                </ul>
            </section>
            <div className="card !bg-white dark:!bg-primary p-5 mt-5 mb-10 flex flex-row">
                <div className="w-full">
                    <span className="text-gold font-bold text-lg">Developer Registration</span>
                    <div className="mt-5">
                        <form
                            id="app"
                            onSubmit={checkForm}
                            action="/"
                            method="post"
                            className='text-muted font-bold text-sm'
                        >
                            <div className="mb-7 relative ">
                                <input id="profile-picture" name="profile-picture" type="file" className="opacity-0 relative w-full z-10 cursor-pointer " onChange={updateFileName} />
                                <div className="w-full !p-0 cursor-pointer  form-control  absolute top-0 flex flex-row justify-between !rounded-[3.3px] dark:bg-fields">
                                    <span className="p-2 pt-[10px] pl-4 font-normal text-sm text-[#44403C]">{file_name}</span>
                                    <div className="input-addon  input-group-item !bg-gold !text-white dark:!text-[#1C1917] p-2 font-bold rounded-[3.3px] rounded-br-[3.3px] text-[12px] uppercase">Profile Picture</div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="label block mb-2" htmlFor="developer_name">Developer Name <span className="invalid-feedback">*</span></label>
                                <input id="developer_name" name="developer_name" type="text" className="form-control" placeholder="Your name"
                                    onChange={(e) => setDeveloperName(e.target.value)} defaultValue={developer_name} />
                                <small v-if="errors.developer_wallet" className="block mt-2 invalid-feedback">{errors.developer_wallet}</small>
                            </div>
                            <div className="mb-5">
                                <label className="label block mb-2" htmlFor="scam_type">Description <span className="invalid-feedback">*</span></label>
                                <textarea id="scam_type" name="scam_type" className="form-control" rows="4" placeholder="Tell us few things about you"
                                    onChange={(e) => setScamType(e.target.value)} defaultValue={scam_type}></textarea>
                                {errors.scam_type && <small className="block mt-2 invalid-feedback">{errors.scam_type}</small>}
                            </div>
                            <div className="mb-5">
                                <label className="label block mb-2" htmlFor="developer_wallet">Developer Wallet <span className="invalid-feedback">*</span></label>
                                <input id="developer_wallet" name="developer_wallet" type="text" className="form-control" placeholder="Please input a valid address"
                                    onChange={(e) => setDeveloperWallet(e.target.value)} value={developer_wallet} />
                                {errors.developer_wallet && <small className="block mt-2 invalid-feedback">{errors.developer_wallet}</small>}
                            </div>

                            <div className="w-full flex flex-row mb-5">
                                <div className="w-full">
                                    <label className="label block mb-2" htmlFor="telegram_username">Telegram Username <span className="invalid-feedback">*</span></label>
                                    <div className="input-group">
                                        <div className="input-addon input-addon-prepend input-group-item !bg-[#CA8A04] dark:!bg-[#292524] !text-white dark:!text-[#57534E]">@</div>
                                        <input id="telegram_username" type="text" name="telegram_username" className="form-control input-group-item" placeholder="Telegram Username"
                                            onChange={(e) => setDeveloperTelegram(e.target.value)} value={developer_telegram} />
                                    </div>
                                    {errors.telegram_username && <small className="block mt-2 invalid-feedback">{errors.telegram_username}</small>}
                                </div>
                                <div className="w-full ml-5">
                                    <label className="label block mb-2" htmlFor="twitter_username">Twitter Username</label>
                                    <div className="input-group">
                                        <div className="input-addon input-addon-prepend input-group-item !bg-[#CA8A04] dark:!bg-[#292524] !text-white dark:!text-[#57534E]">@</div>
                                        <input id="twitter_username" type="text" name="twitter_username" className="form-control input-group-item" placeholder="Twitter Username"
                                            onChange={(e) => setDeveloperTwitter(e.target.value)} value={developer_twitter}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-row mb-5">
                                <div className="w-full ">
                                    <label className="label block mb-2" htmlFor="telegram_project">Telegram Project <span className="invalid-feedback">*</span></label>
                                    <div className="input-group">
                                        <input id="telegram_project" type="text" name="telegram_project" className="form-control input-group-item" placeholder="Telegram Project"
                                            onChange={(e) => setTelegramProject(e.target.value)} value={telegram_project} />
                                    </div>
                                    {errors.telegram_username && <small className="block mt-2 invalid-feedback">{errors.telegram_username}</small>}
                                </div>
                                <div className="w-full ml-5 ">
                                    <label className="label block mb-2" htmlFor="website">Website</label>
                                    <div className="input-group">
                                        <input id="website" type="text" name="website" className="form-control input-group-item" placeholder="Website"
                                            onChange={(e) => setDeveloperWebsite(e.target.value)} value={developer_website} />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="label block mb-2" htmlFor="title">Contract Address</label>
                                <input id="transactions" name="transactions" type="text" className="form-control" placeholder="Transaction Address"
                                    onChange={(e) => setContractAddress(e.target.value)} value={contract_address} />
                            </div>
                            <div className="mb-5">
                                <small>All fields with (<span className="invalid-feedback">*</span>) are Required.</small>
                            </div>
                            <div className="">
                                <button type="submit" className="bg-gold py-2 px-5 rounded-full  text-white dark:text-primary text-sm uppercase">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
