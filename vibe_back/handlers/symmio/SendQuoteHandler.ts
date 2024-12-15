import {ethereum} from "@graphprotocol/graph-ts"
import {Version} from "../../../common/BaseHandler";
import {Account} from "../../../generated/schema";
import {SendQuote} from "../../../generated/symmio_0_8_2/symmio_0_8_2";
import {SendQuoteHandler as CommonSendQuoteHandler} from "../../../common/handlers/symmio/SendQuoteHandler";

export class SendQuoteHandler<T> extends CommonSendQuoteHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        // @ts-ignore
        const event = changetype<SendQuote>(_event)
        let account = Account.load(event.params.partyA.toHexString())
        if (!account) return
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
