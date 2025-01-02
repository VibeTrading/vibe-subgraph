import {BigInt, ethereum} from "@graphprotocol/graph-ts";
import {getOwner, updateDailyHistory, zero_address} from "../../utils";
import {Quote} from "../../../generated/schema";
import {QuoteStatus} from "../../config";
import {Version} from "../../../common/BaseHandler";

export function handleCloseRequest<T>(event: ethereum.Event, version: Version): void {
    // @ts-ignore
    const closeRequestEvent = changetype<T>(event);

    const user = getOwner(closeRequestEvent.params.partyA);
    const account = closeRequestEvent.params.partyA;

    if (user == zero_address) return;

    const quoteId = closeRequestEvent.params.quoteId.toString();
    const quote = Quote.load(quoteId);
    if (!quote) return;

    const tradeVolume = getVolume(closeRequestEvent.params.filledAmount, closeRequestEvent.params.closedPrice);
    updateDailyHistory(user, account, event.block.timestamp.div(BigInt.fromI32(86400)), tradeVolume, BigInt.zero(), event.block.timestamp);

    quote.averageClosedPrice = quote.averageClosedPrice!
        .times(quote.closedAmount!)
        .plus(closeRequestEvent.params.filledAmount!.times(closeRequestEvent.params.closedPrice!))
        .div(quote.closedAmount!.plus(closeRequestEvent.params.filledAmount!));

    quote.closedAmount = quote.closedAmount!.plus(closeRequestEvent.params.filledAmount!);
    if (quote.closedAmount! == quote.quantity!) {
        quote.quoteStatus = QuoteStatus.CLOSED;
        quote.closeDay = event.block.timestamp.div(BigInt.fromI32(86400));
    }
    quote.timestamp = event.block.timestamp;

    quote.save();
}

function getVolume(filledAmount: BigInt, closedPrice: BigInt): BigInt {
    return filledAmount.times(closedPrice).div(BigInt.fromString("10").pow(18));
}
