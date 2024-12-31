import {AddSymbolHandler} from './handlers/symmio/AddSymbolHandler'
import {
    AcceptCancelCloseRequest,
    AcceptCancelRequest,
    AddSymbol,
    AllocateForPartyB,
    AllocatePartyA,
    ChargeFundingRate,
    DeallocateForPartyB,
    DeallocatePartyA,
    Deposit,
    EmergencyClosePosition,
    ExpireQuote,
    FillCloseRequest,
    ForceClosePosition,
    LiquidatePartyA,
    LiquidatePartyB,
    LiquidatePendingPositionsPartyA,
    LiquidatePositionsPartyA,
    LiquidatePositionsPartyB,
    LockQuote,
    OpenPosition,
    RegisterPartyB,
    RequestToClosePosition,
    SendQuote,
    SetSymbolTradingFee,
    UnlockQuote,
    Withdraw
} from '../generated/symmio_0_8_3/symmio_0_8_3'
import {AllocateForPartyBHandler} from './handlers/symmio/AllocateForPartyBHandler'
import {AllocatePartyAHandler} from './handlers/symmio/AllocatePartyAHandler'
import {DeallocateForPartyBHandler} from './handlers/symmio/DeallocateForPartyBHandler'
import {DeallocatePartyAHandler} from './handlers/symmio/DeallocatePartyAHandler'
import {DepositHandler} from './handlers/symmio/DepositHandler'
import {EmergencyClosePositionHandler} from './handlers/symmio/EmergencyClosePositionHandler'
import {FillCloseRequestHandler} from './handlers/symmio/FillCloseRequestHandler'
import {ForceClosePositionHandler} from './handlers/symmio/ForceClosePositionHandler'
import {LiquidatePositionsPartyAHandler} from './handlers/symmio/LiquidatePositionsPartyAHandler'
import {LiquidatePositionsPartyBHandler} from './handlers/symmio/LiquidatePositionsPartyBHandler'
import {OpenPositionHandler} from './handlers/symmio/OpenPositionHandler'
import {RequestToClosePositionHandler} from './handlers/symmio/RequestToClosePositionHandler'
import {SendQuoteHandler} from './handlers/symmio/SendQuoteHandler'
import {SetSymbolTradingFeeHandler} from './handlers/symmio/SetSymbolTradingFeeHandler'
import {Version} from '../common/BaseHandler'
import {WithdrawHandler} from './handlers/symmio/WithdrawHandler'
import {AcceptCancelRequestHandler} from "./handlers/symmio/AcceptCancelRequestHandler";
import {AcceptCancelCloseRequestHandler} from "./handlers/symmio/AcceptCancelCloseRequestHandler";
import {ChargeFundingRateHandler} from "./handlers/symmio/ChargeFundingRateHandler";
import {LiquidatePartyAHandler} from "./handlers/symmio/LiquidatePartyAHandler";
import {LiquidatePartyBHandler} from "./handlers/symmio/LiquidatePartyBHandler";
import {LiquidatePendingPositionsPartyAHandler} from "./handlers/symmio/LiquidatePendingPositionsPartyAHandler";
import {LockQuoteHandler} from "./handlers/symmio/LockQuoteHandler";
import {RegisterPartyBHandler} from "./handlers/symmio/RegisterPartyBHandler";
import {UnlockQuoteHandler} from "./handlers/symmio/UnlockQuoteHandler";
import {ExpireQuoteHandler} from "./handlers/symmio/ExpireQuoteHandler";
import {RoleGranted, RoleRevoked} from "../generated/symmio_0_8_3/symmio_0_8_3";


export function handleAddSymbol(event: AddSymbol): void {
    let handler = new AddSymbolHandler<AddSymbol>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleAllocateForPartyB(event: AllocateForPartyB): void {
    let handler = new AllocateForPartyBHandler<AllocateForPartyB>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleAllocatePartyA(event: AllocatePartyA): void {
    let handler = new AllocatePartyAHandler<AllocatePartyA>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleDeallocateForPartyB(event: DeallocateForPartyB): void {
    let handler = new DeallocateForPartyBHandler<DeallocateForPartyB>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleDeallocatePartyA(event: DeallocatePartyA): void {
    let handler = new DeallocatePartyAHandler<DeallocatePartyA>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleDeposit(event: Deposit): void {
    let handler = new DepositHandler<Deposit>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleEmergencyClosePosition(event: EmergencyClosePosition): void {
    let handler = new EmergencyClosePositionHandler<EmergencyClosePosition>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleFillCloseRequest(event: FillCloseRequest): void {
    let handler = new FillCloseRequestHandler<FillCloseRequest>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleForceClosePosition(event: ForceClosePosition): void {
    let handler = new ForceClosePositionHandler<ForceClosePosition>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleLiquidatePositionsPartyA(event: LiquidatePositionsPartyA): void {
    let handler = new LiquidatePositionsPartyAHandler<LiquidatePositionsPartyA>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleLiquidatePositionsPartyB(event: LiquidatePositionsPartyB): void {
    let handler = new LiquidatePositionsPartyBHandler<LiquidatePositionsPartyB>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleOpenPosition(event: OpenPosition): void {
    let handler = new OpenPositionHandler<OpenPosition>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleRequestToClosePosition(event: RequestToClosePosition): void {
    let handler = new RequestToClosePositionHandler<RequestToClosePosition>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleSendQuote(event: SendQuote): void {
    let handler = new SendQuoteHandler<SendQuote>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleSetSymbolTradingFee(event: SetSymbolTradingFee): void {
    let handler = new SetSymbolTradingFeeHandler<SetSymbolTradingFee>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleWithdraw(event: Withdraw): void {
    let handler = new WithdrawHandler<Withdraw>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleAcceptCancelRequest(event: AcceptCancelRequest): void {
    let handler = new AcceptCancelRequestHandler<AcceptCancelRequest>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleAcceptCancelCloseRequest(event: AcceptCancelCloseRequest): void {
    let handler = new AcceptCancelCloseRequestHandler<AcceptCancelCloseRequest>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleChargeFundingRate(event: ChargeFundingRate): void {
    let handler = new ChargeFundingRateHandler<ChargeFundingRate>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleExpireQuote(event: ExpireQuote): void {
    let handler = new ExpireQuoteHandler<ExpireQuote>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleLiquidatePartyA(event: LiquidatePartyA): void {
    let handler = new LiquidatePartyAHandler<LiquidatePartyA>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleLiquidatePartyB(event: LiquidatePartyB): void {
    let handler = new LiquidatePartyBHandler<LiquidatePartyB>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleLiquidatePendingPositionsPartyA(event: LiquidatePendingPositionsPartyA): void {
    let handler = new LiquidatePendingPositionsPartyAHandler<LiquidatePendingPositionsPartyA>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleLockQuote(event: LockQuote): void {
    let handler = new LockQuoteHandler<LockQuote>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleRegisterPartyB(event: RegisterPartyB): void {
    let handler = new RegisterPartyBHandler<RegisterPartyB>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleUnlockQuote(event: UnlockQuote): void {
    let handler = new UnlockQuoteHandler<UnlockQuote>()
    handler.handle(event, Version.v_0_8_3)
}


export function handleRoleGranted(event: RoleGranted): void {  // FIXME: remove later(shouldn't be needed)
}

export function handleRoleRevoked(event: RoleRevoked): void {  // FIXME: remove later(shouldn't be needed)
}
