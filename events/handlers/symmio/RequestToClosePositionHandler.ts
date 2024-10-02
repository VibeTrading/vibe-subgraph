import {RequestToClosePosition as RequestToClosePositionEntity} from "../../../generated/schema";
import {ethereum} from "@graphprotocol/graph-ts";
import {Version} from "../../../common/BaseHandler";

export class RequestToClosePositionHandler<T>  {
	handle(_event: ethereum.Event, version: Version): void {
		// @ts-ignore
		const event = changetype<T>(_event)

		let entity = new RequestToClosePositionEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
		entity.partyA = event.params.partyA;
		entity.partyB = event.params.partyB;
		entity.quoteId = event.params.quoteId;
		entity.closePrice = event.params.closePrice;
		entity.quantityToClose = event.params.quantityToClose;
		entity.orderType = event.params.orderType;
		entity.deadline = event.params.deadline;
		entity.quoteStatus = event.params.quoteStatus;

		entity.blockTimestamp = event.block.timestamp;
		entity.blockNumber = event.block.number;
		entity.transactionHash = event.transaction.hash;
		entity.save();
	}
}