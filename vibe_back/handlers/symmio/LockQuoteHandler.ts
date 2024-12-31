import {ethereum} from "@graphprotocol/graph-ts";
import {LockQuoteHandler as CommonLockQuoteHandler} from "../../../common/handlers/symmio/LockQuoteHandler";
import {Version} from "../../../common/BaseHandler";
import {Quote} from "../../../generated/schema";

export class LockQuoteHandler<T> extends CommonLockQuoteHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        // @ts-ignore
        const event = changetype<T>(_event)
        let quote = Quote.load(event.params.quoteId.toString())
        if (!quote) return

        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}