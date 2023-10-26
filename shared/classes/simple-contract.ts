import Web3 from 'web3';

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

  public async setNumber(number: number): Promise<void> {
    await this.contract.methods
      .setNumber(number)
      .send({ from: process.env.FROM });
  }

  public async multiply(factor: number): Promise<void> {
    await this.contract.methods
      .multiply(factor)
      .send({ from: process.env.FROM });
  }

  private static readonly ABI = [
    {
      inputs: [],
      name: 'getNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_number',
          type: 'uint256',
        },
      ],
      name: 'setNumber',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_factor',
          type: 'uint256',
        },
      ],
      name: 'multiply',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
}

export default SimpleContract;
