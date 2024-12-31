import {ethereum} from "@graphprotocol/graph-ts";
import {LiquidatePendingPositionsPartyAHandler as CommonLiquidatePendingPositionsPartyAHandler} from "../../../common/handlers/symmio/LiquidatePendingPositionsPartyAHandler";
import {Version} from "../../../common/BaseHandler";

export class LiquidatePendingPositionsPartyAHandler<T> extends CommonLiquidatePendingPositionsPartyAHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}