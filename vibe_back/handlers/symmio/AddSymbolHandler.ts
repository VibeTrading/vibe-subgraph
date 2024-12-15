import {ethereum} from "@graphprotocol/graph-ts"
import {Version} from "../../../common/BaseHandler";
import {AddSymbolHandler as CommonAddSymbolHandler} from "../../../common/handlers/symmio/AddSymbolHandler";

export class AddSymbolHandler<T> extends CommonAddSymbolHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
