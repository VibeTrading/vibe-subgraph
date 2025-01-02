import { AddAccount as AddAccountEvent, EditAccountName as EditAccountNameEvent } from "../generated/MultiAccount/MultiAccount"
import { Account } from "../generated/schema"

export function handleAddAccount(event: AddAccountEvent): void {
	let entity = new Account(event.params.account.toHexString())
	entity.user = event.params.user
	entity.account = event.params.account
	entity.name = event.params.name

	entity.blockNumber = event.block.number
	entity.timestamp = event.block.timestamp
	entity.lastUpdate = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleEditAccountName(event: EditAccountNameEvent): void {
	let entity = Account.load(event.params.account.toHexString())!
	entity.name = event.params.newName
	entity.lastUpdate = event.block.timestamp
	entity.save()
}
