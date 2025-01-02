import {OpenPositionHandler as CommonOpenPositionHandler} from "../../../common/handlers/symmio/OpenPositionHandler";
import {ethereum} from "@graphprotocol/graph-ts";
import {Version} from "../../../common/BaseHandler";
import {handleOpenPosition} from "../common/OpenPositionHandler";
import {Quote} from "../../../generated/schema";

export class OpenPositionHandler<T> extends CommonOpenPositionHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        handleOpenPosition<T>(_event, version)

        // @ts-ignore
        const event = changetype<T>(_event)
        const quote = Quote.load(event.params.quoteId.toString())
        if (!quote) return

        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
