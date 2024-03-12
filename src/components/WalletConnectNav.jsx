"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function WalletConnectNav() {
  const { open } = useWeb3Modal();

  return (
    <button
      onClick={() => {
        open();
      }}
      className="bg-gradient-to-r from-[#ED0137] to-smurai-grade-orange rounded-[1.544rem] p-[10px_12px] text-[1.6rem] font-inter font-semibold text-white h-[4.8rem] w-[16.2rem] shadow-lg hover:scale-105 transition-all duration-300">
      Connect Wallet
    </button>
  );
}

export default WalletConnectNav;
