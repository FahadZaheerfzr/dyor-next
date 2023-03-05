import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Overview from "@/components/Developer/Overview/Overview";
import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import ERC_ABI from '@/config/abi/ERC20.json'
import { ethers } from "ethers";

const OverviewPage = () => {
  const [data, setData] = useState();
  const [topVoted, setTopVoted] = useState();
  const { account } = useEthers();
  const [showPage, setShowPage] = useState(true);

  const checkToken = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract("0x54f6929ad3c2628fa216fad4417a9e054d8adf66 ", ERC_ABI, signer);
    const account = await signer.getAddress(); // Get the connected wallet address

    const balance = await tokenContract.balanceOf(account);
    let tokenDecimals = 18;
    const balanceInToken = ethers.utils.formatEther(balance, tokenDecimals); // Convert balance to BNB

    if (balanceInToken < 150000) {
      setShowPage(false) 
    }

    console.log(`Wallet has ${balanceInBNB} BNB`);
  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/fetch_developers");
      const res_data = await response.json();
      let tags = ["BSC"]
      for (let i = 0; i < res_data.length; i++) {
        res_data[i].tags = tags;
      }
      console.log(res_data)
      let topVoted = res_data.sort((a, b) => b.votes - a.votes).slice(0, 5);
      setData(res_data);
      setTopVoted(topVoted);
    };

    fetchData();
  }, []);

  useEffect(() => {
    checkToken()
  }, [])




  return (
    <BaseLayout title={"Overview"}>
      {account && showPage ? <Overview data={data} topVoted={topVoted} />
        :
        <div className="bg-gold font-nunito_sans text-white text-center py-2 mt-5">Please connect your wallet to view this page or you don&#39;t have enough tokens</div>}

    </BaseLayout>
  );
};

export default OverviewPage;
