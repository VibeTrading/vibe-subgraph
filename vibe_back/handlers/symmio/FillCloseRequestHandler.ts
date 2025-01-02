import {ethereum} from "@graphprotocol/graph-ts"
import {Version} from "../../../common/BaseHandler";
import {
    FillCloseRequestHandler as CommonFillCloseRequestHandler
} from "../../../common/handlers/symmio/FillCloseRequestHandler";
import {handleCloseRequest} from "../common/CloseRequestHandler";
import {Quote} from "../../../generated/schema";

export class FillCloseRequestHandler<T> extends CommonFillCloseRequestHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        handleCloseRequest<T>(_event, version)

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
