
import {ExpireQuoteHandler as CommonExpireQuoteHandler} from "../../common/handlers/ExpireQuoteHandler"
import {ExpireQuote} from "../../generated/symmio/symmio"

export class ExpireQuoteHandler extends CommonExpireQuoteHandler {

    constructor(event: ExpireQuote) {
        super(event)
    }

    handle(): void {
		super.handle()
    }
}