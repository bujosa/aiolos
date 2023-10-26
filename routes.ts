import { Router, Request, Response } from 'express';
import SimpleContract from './shared/classes/simple-contract';
import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.RPC_ENDPOINT as string)
);

const contract = new SimpleContract(
  process.env.CONTRACT_ADDRESS as string,
  web3
);

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get('/number', async (req: Request, res: Response) => {
  const number = await contract.getNumber();

  res.json({
    number,
  });
});

router.post('/number', async (req: Request, res: Response) => {
  const { number } = req.body;
  const result = await contract.setNumber(number);
  res.json({
    number,
    gasUsed: result.getGasUsed(),
  });
});

router.post('/number/multiply', async (req: Request, res: Response) => {
  const { number } = req.body;
  const result = await contract.multiply(number);
  res.json({
    number,
    gasUsed: result.getGasUsed(),
  });
});

export default router;
