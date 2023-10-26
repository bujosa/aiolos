import Web3 from 'web3';
import { FormattedTransactionReceipt } from './formatted-transaction-receipt';

class SimpleContract {
  private contract: any;

  constructor(
    private readonly contractAddress: string,
    private readonly web3: Web3
  ) {
    this.contract = new web3.eth.Contract(SimpleContract.ABI, contractAddress);
  }

  public async getNumber(): Promise<string> {
    const number = await this.contract.methods.getNumber().call();
    return number.toString();
  }

  public async setNumber(number: number): Promise<FormattedTransactionReceipt> {
    const receipt = await this.contract.methods
      .setNumber(number)
      .send({ from: process.env.FROM });

    return new FormattedTransactionReceipt(receipt);
  }

  public async multiply(factor: number): Promise<FormattedTransactionReceipt> {
    const receipt = await this.contract.methods
      .multiply(factor)
      .send({ from: process.env.FROM });

    return new FormattedTransactionReceipt(receipt);
  }

  private static readonly ABI =
    require('../../build/contracts/SimpleContract.json').abi;
}

export default SimpleContract;
