// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {EthereumLog, EthereumTransaction, LightEthereumLog} from "@subql/types-ethereum";

import {InitializedEvent, OwnershipTransferredEvent, RoleAdminChangedEvent, RoleGrantedEvent, RoleRevokedEvent, TradeEvent, FT_1710} from '../contracts/FT_1710'


export type InitializedLog = EthereumLog<InitializedEvent["args"]>

export type OwnershipTransferredLog = EthereumLog<OwnershipTransferredEvent["args"]>

export type RoleAdminChangedLog = EthereumLog<RoleAdminChangedEvent["args"]>

export type RoleGrantedLog = EthereumLog<RoleGrantedEvent["args"]>

export type RoleRevokedLog = EthereumLog<RoleRevokedEvent["args"]>

export type TradeLog = EthereumLog<TradeEvent["args"]>


export type LightInitializedLog = LightEthereumLog<InitializedEvent["args"]>

export type LightOwnershipTransferredLog = LightEthereumLog<OwnershipTransferredEvent["args"]>

export type LightRoleAdminChangedLog = LightEthereumLog<RoleAdminChangedEvent["args"]>

export type LightRoleGrantedLog = LightEthereumLog<RoleGrantedEvent["args"]>

export type LightRoleRevokedLog = LightEthereumLog<RoleRevokedEvent["args"]>

export type LightTradeLog = LightEthereumLog<TradeEvent["args"]>


export type DEFAULT_ADMIN_ROLETransaction = EthereumTransaction<Parameters<FT_1710['functions']['DEFAULT_ADMIN_ROLE']>>

export type INIT_BID_PRICETransaction = EthereumTransaction<Parameters<FT_1710['functions']['INIT_BID_PRICE']>>

export type OPERATOR_ROLETransaction = EthereumTransaction<Parameters<FT_1710['functions']['OPERATOR_ROLE']>>

export type PERCENT_BASETransaction = EthereumTransaction<Parameters<FT_1710['functions']['PERCENT_BASE']>>

export type PRICE_ATransaction = EthereumTransaction<Parameters<FT_1710['functions']['PRICE_A']>>

export type PRICE_BTransaction = EthereumTransaction<Parameters<FT_1710['functions']['PRICE_B']>>

export type PRICE_CTransaction = EthereumTransaction<Parameters<FT_1710['functions']['PRICE_C']>>

export type PRICE_STEP_PERCENTTransaction = EthereumTransaction<Parameters<FT_1710['functions']['PRICE_STEP_PERCENT']>>

export type ActivateOwnerTransaction = EthereumTransaction<Parameters<FT_1710['functions']['activateOwner']>>

export type BalanceOfTransaction = EthereumTransaction<Parameters<FT_1710['functions']['balanceOf']>>

export type BuySharesTransaction = EthereumTransaction<Parameters<FT_1710['functions']['buyShares']>>

export type GetBiddingTimeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getBiddingTime']>>

export type GetBuyPriceTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getBuyPrice']>>

export type GetBuyPriceAfterFeeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getBuyPriceAfterFee']>>

export type GetFeeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getFee']>>

export type GetPoolInitialBuyTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolInitialBuy']>>

export type GetPoolInitialBuyPriceAfterFeeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolInitialBuyPriceAfterFee']>>

export type GetPoolInitialTopsTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolInitialTops']>>

export type GetPoolReferrerTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolReferrer']>>

export type GetPoolReferrerFeeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolReferrerFee']>>

export type GetPoolSubjectFeeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolSubjectFee']>>

export type GetPoolValueTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPoolValue']>>

export type GetPriceTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getPrice']>>

export type GetRoleAdminTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getRoleAdmin']>>

export type GetSellPriceTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getSellPrice']>>

export type GetSellPriceAfterFeeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['getSellPriceAfterFee']>>

export type GrantRoleTransaction = EthereumTransaction<Parameters<FT_1710['functions']['grantRole']>>

export type HasRoleTransaction = EthereumTransaction<Parameters<FT_1710['functions']['hasRole']>>

export type InitializeTransaction = EthereumTransaction<Parameters<FT_1710['functions']['initialize']>>

export type InitializeSharesTransaction = EthereumTransaction<Parameters<FT_1710['functions']['initializeShares']>>

export type InitializeSharesBySystemTransaction = EthereumTransaction<Parameters<FT_1710['functions']['initializeSharesBySystem']>>

export type InitializeSharesSubTransaction = EthereumTransaction<Parameters<FT_1710['functions']['initializeSharesSub']>>

export type MaxInitialSharesTransaction = EthereumTransaction<Parameters<FT_1710['functions']['maxInitialShares']>>

export type OwnerTransaction = EthereumTransaction<Parameters<FT_1710['functions']['owner']>>

export type OwnerOfTransaction = EthereumTransaction<Parameters<FT_1710['functions']['ownerOf']>>

export type PoolFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['poolFeePercent']>>

export type ProtocolFeeDestinationTransaction = EthereumTransaction<Parameters<FT_1710['functions']['protocolFeeDestination']>>

export type ProtocolFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['protocolFeePercent']>>

export type ReferrerFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['referrerFeePercent']>>

export type RenounceOwnershipTransaction = EthereumTransaction<Parameters<FT_1710['functions']['renounceOwnership']>>

export type RenounceRoleTransaction = EthereumTransaction<Parameters<FT_1710['functions']['renounceRole']>>

export type RevokeRoleTransaction = EthereumTransaction<Parameters<FT_1710['functions']['revokeRole']>>

export type SellSharesTransaction = EthereumTransaction<Parameters<FT_1710['functions']['sellShares']>>

export type SetMaxInitialSharesTransaction = EthereumTransaction<Parameters<FT_1710['functions']['setMaxInitialShares']>>

export type SetPoolFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['setPoolFeePercent']>>

export type SetProtocolFeeDestinationTransaction = EthereumTransaction<Parameters<FT_1710['functions']['setProtocolFeeDestination']>>

export type SetProtocolFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['setProtocolFeePercent']>>

export type SetReferrerFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['setReferrerFeePercent']>>

export type SetSubjectFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['setSubjectFeePercent']>>

export type SubjectFeePercentTransaction = EthereumTransaction<Parameters<FT_1710['functions']['subjectFeePercent']>>

export type SupplyOfTransaction = EthereumTransaction<Parameters<FT_1710['functions']['supplyOf']>>

export type SupportsInterfaceTransaction = EthereumTransaction<Parameters<FT_1710['functions']['supportsInterface']>>

export type TransferOwnershipTransaction = EthereumTransaction<Parameters<FT_1710['functions']['transferOwnership']>>

export type VersionTransaction = EthereumTransaction<Parameters<FT_1710['functions']['version']>>

