import {ethereum} from "@graphprotocol/graph-ts"
import {handleCloseRequest} from "../common/CloseRequestHandler";
import {Version} from "../../../common/BaseHandler";
import {
    ForceClosePositionHandler as CommonForceClosePositionHandler
} from "../../../common/handlers/symmio/ForceClosePositionHandler";


export class ForceClosePositionHandler<T> extends CommonForceClosePositionHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        handleCloseRequest<T>(_event, version)
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}
