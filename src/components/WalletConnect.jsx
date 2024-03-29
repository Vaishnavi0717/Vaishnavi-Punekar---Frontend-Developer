"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function WalletConnect() {
  const { open } = useWeb3Modal();

  return (
    <button
      onClick={() => {
        open();
      }}
      className="bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange rounded-[16.21px] p-[10px_12px] text-[1.408rem] font-zcool mt-[3.5rem] h-[45px] w-[145px] hover:scale-105 transition-all duration-300">
      Connect Wallet
    </button>
  );
}

export default WalletConnect;
