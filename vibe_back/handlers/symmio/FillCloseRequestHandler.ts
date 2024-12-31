import {ethereum} from "@graphprotocol/graph-ts"
import {Version} from "../../../common/BaseHandler";
import {FillCloseRequestHandler as CommonFillCloseRequestHandler} from "../../../common/handlers/symmio/FillCloseRequestHandler";
import {handleCloseRequest} from "../common/CloseRequestHandler";

export class FillCloseRequestHandler<T> extends CommonFillCloseRequestHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        handleCloseRequest<T>(_event, version)
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
