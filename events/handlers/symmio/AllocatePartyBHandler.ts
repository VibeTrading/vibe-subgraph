import { AllocatePartyB as AllocatePartyBEntity } from "../../../generated/schema"
import { ethereum } from "@graphprotocol/graph-ts"
import { Version } from "../../../common/BaseHandler"
import { getGlobalCounterAndInc } from "../../../common/utils"

export class AllocatePartyBHandler<T> {
	handle(_event: ethereum.Event, version: Version): void {
		// @ts-ignore
		const event = changetype<T>(_event)

		let entity = new AllocatePartyBEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
		entity.globalId = getGlobalCounterAndInc()
		entity.partyB = event.params.partyB
		entity.partyA = event.params.partyA
		entity.amount = event.params.amount

		entity.blockTimestamp = event.block.timestamp
		entity.blockNumber = event.block.number
		entity.transactionHash = event.transaction.hash
		entity.save()
	}
}
