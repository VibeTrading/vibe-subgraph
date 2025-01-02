import {Address, BigInt, ethereum} from "@graphprotocol/graph-ts";
import {getOwner, updateDailyHistory, zero_address} from "../../utils";
import {Quote} from "../../../generated/schema";
import {QuoteStatus} from "../../config";
import {Version} from "../../../common/BaseHandler";
import {symmio_0_8_2} from "../../../generated/symmio_0_8_2/symmio_0_8_2";

export function handleLiquidatePositions<T>(event: ethereum.Event, version: Version): void {
    // @ts-ignore
    const liquidateEvent = changetype<T>(event);

    const user = getOwner(liquidateEvent.params.partyA);
    const account = liquidateEvent.params.partyA;

    if (user == zero_address) return;

    const quoteIds = liquidateEvent.params.quoteIds;
    for (let i = 0; i < quoteIds.length; i++) {
        handleSingleLiquidation<T>(quoteIds[i], user, account, liquidateEvent, event.block.timestamp);
    }
}

function handleSingleLiquidation<T>(quoteId: BigInt, user: Address, account: Address, event: ethereum.Event, timestamp: BigInt): void {
    // @ts-ignore
    const liquidateEvent = changetype<T>(event);
    const tradeVolume = getVolume<T>(quoteId, liquidateEvent);
    updateDailyHistory(user, account, timestamp.div(BigInt.fromI32(86400)), tradeVolume, BigInt.zero(), timestamp);
}

function getVolume<T>(quoteId: BigInt, event: ethereum.Event): BigInt {
    // @ts-ignore
    const liquidateEvent = changetype<T>(event);

    const quote = Quote.load(quoteId.toString());
    if (!quote) return BigInt.zero();

    quote.quoteStatus = QuoteStatus.LIQUIDATED;
    quote.timestamp = liquidateEvent.block.timestamp;
    quote.closeDay = liquidateEvent.block.timestamp.div(BigInt.fromI32(86400));
    quote.save();

    const symmioContract = symmio_0_8_2.bind(liquidateEvent.address);
    const callResult = symmioContract.try_getQuote(quoteId);
    if (callResult.reverted) return BigInt.zero(); // FIXME

    const chainQuote = callResult.value;
    const liquidAmount = quote.quantity!.minus(quote.closedAmount!);
    const liquidPrice = chainQuote.avgClosedPrice!
        .times(quote.quantity!)
        .minus(quote.averageClosedPrice!.times(quote.closedAmount!))
        .div(liquidAmount);

    return liquidAmount.times(liquidPrice).div(BigInt.fromString("10").pow(18));
}
