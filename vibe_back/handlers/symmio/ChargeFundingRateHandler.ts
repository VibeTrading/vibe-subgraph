import {ChargeFundingRateHandler as CommonChargeFundingRateHandler} from "../../../common/handlers/symmio/ChargeFundingRateHandler";
import {Version} from "../../../common/BaseHandler";
import {ethereum} from "@graphprotocol/graph-ts";

export class ChargeFundingRateHandler<T> extends CommonChargeFundingRateHandler<T> {
    handle(_event: ethereum.Event, version: Version): void {
        super.handle(_event, version)
        super.handleQuote(_event, version)
        super.handleAccount(_event, version)
        super.handleSymbol(_event, version)
    }
}