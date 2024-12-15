import {ethereum} from "@graphprotocol/graph-ts";
import {LiquidatePartyBHandler as CommonLiquidatePartyBHandler} from "../../../common/handlers/symmio/LiquidatePartyBHandler";
import {Version} from "../../../common/BaseHandler";

export class LiquidatePartyBHandler<T> extends CommonLiquidatePartyBHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}