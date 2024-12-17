import {ethereum} from "@graphprotocol/graph-ts"
import {handleLiquidatePositions} from "../common/LiquidatePositionsHandler";
import {Version} from "../../../common/BaseHandler";
import {
    LiquidatePositionsPartyAHandler as CommonLiquidatePositionsPartyAHandler
} from "../../../common/handlers/symmio/LiquidatePositionsPartyAHandler";
import {Account} from "../../../generated/schema";

export class LiquidatePositionsPartyAHandler<T> extends CommonLiquidatePositionsPartyAHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        handleLiquidatePositions<T>(_event, version)

        // @ts-ignore
        const event = changetype<T>(_event)
        let account = Account.load(event.params.liquidator.toHexString())
        if (!account)
            return

        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}

