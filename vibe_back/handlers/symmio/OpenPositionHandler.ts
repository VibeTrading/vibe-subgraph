import {OpenPositionHandler as CommonOpenPositionHandler} from "../../../common/handlers/symmio/OpenPositionHandler";
import {ethereum} from "@graphprotocol/graph-ts";
import {Version} from "../../../common/BaseHandler";
import {handleOpenPosition} from "../common/OpenPositionHandler";

export class OpenPositionHandler<T> extends CommonOpenPositionHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        handleOpenPosition<T>(_event, version)
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
