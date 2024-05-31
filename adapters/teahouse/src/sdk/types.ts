
export type OutputDataSchemaRow = {
    block_number: number;
    timestamp: number;
    user_address: string;
    token_address: string;
    token_balance: bigint;
    token_symbol: string; //token symbol should be empty string if it is not available
    usd_price: number; //assign 0 if not available
};

export interface BlockData {
    blockNumber: number;
    blockTimestamp: number;
  }

export interface StakedToken {
    [wrapperAddress: string]: string;
}

export interface UserTokenAmounts {
    [user: string]: {
        [token: string]: bigint;
    };
}

export interface TokenSymbol {
    [tokenAddress: string]: string;
}