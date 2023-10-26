interface TransactionReceipt {
  transactionHash: string;
  transactionIndex: number;
  blockNumber: number;
  blockHash: string;
  from: string;
  to: string;
  cumulativeGasUsed: number;
  gasUsed: number;
  logs: any[];
  logsBloom: string;
  status: number;
  effectiveGasPrice: number;
  type: number;
}

export class FormattedTransactionReceipt {
  constructor(private readonly receipt: TransactionReceipt) {}

  public getTransactionHash(): string {
    return this.receipt.transactionHash;
  }

  public getBlockNumber(): number {
    return this.receipt.blockNumber;
  }

  public getFrom(): string {
    return this.receipt.from;
  }

  public getTo(): string {
    return this.receipt.to;
  }

  public getGasUsed(): string {
    return this.receipt.gasUsed.toString();
  }
}
