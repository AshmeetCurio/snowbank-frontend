import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x561c56b6ea927c157A9F51fCcCfa50B777c1EA7C",
    SSB_ADDRESS: "0xE9Eb40d52CE4744322204d4a29Af63C30f0260a4",
    WSSB_ADDRESS: "0x31C4c046EFAD4B04b823a919CC0bDd0f663c87d4",
    SB_ADDRESS: "0x7d1232b90d3f809a54eeaeebc639c62df8a8942f",
    MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    STAKING_ADDRESS: "0x85784d5e2CCae89Bcb39EbF0ac6Cdc93d42d99AD",
    STAKING_HELPER_ADDRESS: "0x3d371d925Db78F8e46130AF95756789ecE6387ce",
    SB_BONDING_CALC_ADDRESS: "0xf1AC1eD0Ef7F61223df64e52A6E6E1d6Ca6f992b",
    TREASURY_ADDRESS: "0xa82422A5FD4F9cB85cD4aAc393cD3296A27dD873",
    ZAPIN_ADDRESS: "0xc669dC61aF974FdF50758d95306e4083D36f1430",
    REDEEM_ADDRESS: "0xaFe654C1b34E9F702bf8007Bccd6481b90476887",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
