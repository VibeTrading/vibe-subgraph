import { SetSymbolAcceptableValues as SetSymbolAcceptableValuesEntity } from "../../../generated/schema"
import { ethereum } from "@graphprotocol/graph-ts"
import { Version } from "../../../common/BaseHandler"
import { getGlobalCounterAndInc } from "../../../common/utils"

export class SetSymbolAcceptableValuesHandler<T> {
	handle(_event: ethereum.Event, version: Version): void {
		// @ts-ignore
		const event = changetype<T>(_event)

		let entity = new SetSymbolAcceptableValuesEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
		entity.counterId = getGlobalCounterAndInc()
		entity.symbolId = event.params.symbolId
		entity.oldMinAcceptableQuoteValue = event.params.oldMinAcceptableQuoteValue
		entity.oldMinAcceptablePortionLF = event.params.oldMinAcceptablePortionLF
		entity.minAcceptableQuoteValue = event.params.minAcceptableQuoteValue
		entity.minAcceptablePortionLF = event.params.minAcceptablePortionLF

		entity.blockTimestamp = event.block.timestamp
		entity.blockNumber = event.block.number
		entity.transactionHash = event.transaction.hash
		entity.save()
	}
}
