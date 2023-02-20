import Image from 'next/image'
import React, { useState } from 'react'

export default function Registration() {
    const [file_name, setFileName] = useState('No file Chosen')
    const [errors, setErrors] = useState({})
    const [developer_name, setDeveloperName] = useState('')
    const [scam_type, setScamType] = useState('')
    const [developer_wallet, setDeveloperWallet] = useState('')
    const [developer_email, setDeveloperEmail] = useState('')
    const [developer_website, setDeveloperWebsite] = useState('')
    const [developer_telegram, setDeveloperTelegram] = useState('')


    const updateFileName = (e) => {
        setFileName(e.target.files[0].name)
    }

    const checkForm = (e) => {
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
        if (developer_email === '') {
            errors.developer_email = 'Developer email is required'
        }
        if (developer_website === '') {
            errors.developer_website = 'Developer website is required'
        }
        if (developer_telegram === '') {
            errors.developer_telegram = 'Developer telegram is required'
        }
        setErrors(errors)
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
                                <label className="label block mb-2" for="developer_name">Developer Name <span className="invalid-feedback">*</span></label>
                                <input v-model="developer_wallet" id="developer_name" name="developer_name" type="text" className="form-control" placeholder="Your name" />
                                <small v-if="errors.developer_wallet" className="block mt-2 invalid-feedback">{errors.developer_wallet}</small>
                            </div>
                            <div className="mb-5">
                                <label className="label block mb-2" for="scam_type">Description <span className="invalid-feedback">*</span></label>
                                <textarea v-model="scam_type" id="scam_type" name="scam_type" className="form-control" rows="4" placeholder="Tell us few things about you"></textarea>
                                <small v-if="errors.scam_type" className="block mt-2 invalid-feedback">{errors.scam_type}</small>
                            </div>
                            <div className="mb-5">
                                <label className="label block mb-2" for="developer_wallet">Developer Wallet <span className="invalid-feedback">*</span></label>
                                <input v-model="developer_wallet" id="developer_wallet" name="developer_wallet" type="text" className="form-control" placeholder="Please input a valid adres" />
                                <small v-if="errors.developer_wallet" className="block mt-2 invalid-feedback">{errors.developer_wallet}</small>
                            </div>

                            <div className="w-full flex flex-row mb-5">
                                <div className="w-full mb-5">
                                    <label className="label block mb-2" for="telegram_username">Telegram Username <span className="invalid-feedback">*</span></label>
                                    <div className="input-group">
                                        <div className="input-addon input-addon-prepend input-group-item !bg-[#CA8A04] dark:!bg-[#292524] !text-white dark:!text-[#57534E]">@</div>
                                        <input v-model="telegram_username" id="telegram_username" type="text" name="telegram_username" className="form-control input-group-item" placeholder="Telegram Username" />
                                    </div>
                                    <small v-if="errors.telegram_username" className="block mt-2 invalid-feedback">{errors.telegram_username}</small>
                                </div>
                                <div className="w-full ml-5 mb-5">
                                    <label className="label block mb-2" for="twitter_username">Twitter Username</label>
                                    <div className="input-group">
                                        <div className="input-addon input-addon-prepend input-group-item !bg-[#CA8A04] dark:!bg-[#292524] !text-white dark:!text-[#57534E]">@</div>
                                        <input v-model="twitter_username" id="twitter_username" type="text" name="twitter_username" className="form-control input-group-item" placeholder="Twitter Username" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mb-5 font-semibold text-lg">
                                <span className="text-[#78716C]">Please submit a payment of $100 to this address</span>
                                <span className="text-gold">0x00000000</span>
                            </div>

                            <div className="mb-5">
                                <label className="label block mb-2" for="title">Then submit the transaction to the field below</label>
                                <input v-model="transactions" id="transactions" name="transactions" type="text" className="form-control" placeholder="Transaction Address" />
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
