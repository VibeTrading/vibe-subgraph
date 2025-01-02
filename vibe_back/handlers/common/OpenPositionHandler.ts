import {BigInt, ethereum} from "@graphprotocol/graph-ts";
import {Version} from "../../../common/BaseHandler";
import {getOwner, updateDailyHistory, zero_address} from "../../utils";
import {Quote, Symbol} from "../../../generated/schema";
import {QuoteStatus} from "../../config";

export function handleOpenPosition<T>(event: ethereum.Event, version: Version): void {
    // @ts-ignore
    const openPositionEvent = changetype<T>(event);

    const user = getOwner(openPositionEvent.params.partyA);
    const account = openPositionEvent.params.partyA;

    if (user == zero_address) return;

    const quoteId = openPositionEvent.params.quoteId.toString();
    const quote = Quote.load(quoteId);
    if (!quote) return;

    quote.quantity = openPositionEvent.params.filledAmount;
    quote.openedPrice = openPositionEvent.params.openedPrice;
    quote.quoteStatus = QuoteStatus.OPENED;
    quote.timestamp = event.block.timestamp;
    quote.openDay = event.block.timestamp.div(BigInt.fromI32(86400));
    quote.save();

    const platformFee = getTradingFee(openPositionEvent.params.filledAmount, openPositionEvent.params.openedPrice, quote.symbolId!);
    const volumeInDollars = getTradeVolume(openPositionEvent.params.filledAmount, openPositionEvent.params.openedPrice);

    const day = event.block.timestamp.div(BigInt.fromI32(86400));
    updateDailyHistory(user, account, day, volumeInDollars, platformFee, event.block.timestamp);
}

function getTradeVolume(filledAmount: BigInt, openedPrice: BigInt): BigInt {
    return filledAmount.times(openedPrice).div(BigInt.fromString("10").pow(18));
}

function getTradingFee(filledAmount: BigInt, openedPrice: BigInt, symbolId: BigInt): BigInt {
    const symbol = Symbol.load(symbolId.toString());
    if (!symbol) return BigInt.zero(); // FIXME: should not happen!
    return filledAmount
        .times(openedPrice)
        .times(symbol.tradingFee)
        .div(BigInt.fromString("10").pow(36));
}
