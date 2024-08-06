import {BaseHandler, Version} from "../../BaseHandler"
import {ethereum} from "@graphprotocol/graph-ts/chain/ethereum";
import {Account} from "../../../generated/schema";
import {newUserAndAccount} from "../../../analytics/utils/builders";

export class DepositHandler<T> extends BaseHandler {
	handleAccount(_event: ethereum.Event, version: Version): void {
		// @ts-ignore
		const event = changetype<T>(_event)
		const globalCounter = super.handleGlobalCounter()

		newUserAndAccount(event.params.user, event.block, event.transaction)
		let account = Account.load(event.params.user.toHexString())!
		account.deposit = account.deposit.plus(event.params.amount)
		account.globalCounter = globalCounter
		account.save()
	}
}