import { InitShares } from "../types";
import {
  
    InitializeSharesTransaction,
} from "../types/abi-interfaces/FT_1710";
import assert from "assert";


export async function handleInitShares(tx: InitializeSharesTransaction): Promise<void> {
  logger.info(`New InitializeSharesTransaction block ${tx.blockNumber}`);
  assert(tx.args, "No tx.args");

  const approval = InitShares.create({
    id: tx.hash,
    blockHeight: BigInt(tx.blockNumber),
    _blockTime: BigInt(await tx.args[2].toString()),
    _noInitialShares: BigInt(await tx.args[1].toString()),
    sharesSubject: tx.from,
  });

  await approval.save();
}