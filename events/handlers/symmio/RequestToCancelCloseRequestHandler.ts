import { RequestToCancelCloseRequest as RequestToCancelCloseRequestEntity } from "../../../generated/schema"
import { BigInt, ethereum } from "@graphprotocol/graph-ts"
import { Version } from "../../../common/BaseHandler"
import { getGlobalCounterAndInc } from "../../../common/utils"
import { RequestToCancelCloseRequest as RequestToCancelCloseRequest_8_4 } from "../../../generated/symmio_0_8_4/symmio_0_8_4"
import { RequestToCancelCloseRequest as RequestToCancelCloseRequest_8_3 } from "../../../generated/symmio_0_8_3/symmio_0_8_3"

export class RequestToCancelCloseRequestHandler<T> {
	handle(_event: ethereum.Event, version: Version): void {
		// @ts-ignore
		const event = changetype<T>(_event)

		let entity = new RequestToCancelCloseRequestEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
		entity.counterId = getGlobalCounterAndInc()
		entity.partyA = event.params.partyA
		entity.partyB = event.params.partyB
		entity.quoteId = event.params.quoteId
		entity.quoteStatus = event.params.quoteStatus

		switch (version) {
			case Version.v_0_8_4: {
				// @ts-ignore
				const e = changetype<RequestToCancelCloseRequest_8_4>(_event)
				entity.closeId = e.params.closeId
				break
			}
			case Version.v_0_8_3: {
				// @ts-ignore
				const e = changetype<RequestToCancelCloseRequest_8_3>(_event)
				entity.closeId = e.params.closeId
				break
			}
			default: {
				entity.closeId = BigInt.zero()
				break
			}
		}

		entity.blockTimestamp = event.block.timestamp
		entity.blockNumber = event.block.number
		entity.transactionHash = event.transaction.hash
		entity.save()
	}
}
