import {ethereum} from "@graphprotocol/graph-ts"
import {handleLiquidatePositions} from "../common/LiquidatePositionsHandler";
import {Version} from "../../../common/BaseHandler";
import {LiquidatePositionsPartyBHandler as CommonLiquidatePositionsPartyBHandler} from "../../../common/handlers/symmio/LiquidatePositionsPartyBHandler";

export class LiquidatePositionsPartyBHandler<T> extends CommonLiquidatePositionsPartyBHandler<T>{
    handle(_event: ethereum.Event, version: Version): void {
        handleLiquidatePositions<T>(_event, version)
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
