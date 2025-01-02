import { NFT } from "../generated/schema"
import { ReferralNFT, SetReferrer, Transfer } from "../generated/ReferralNFT/ReferralNFT"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { REFERRAL_NFT_ADDRESS } from "./config"

function getAccountOwner(tokenId: BigInt): Address {
	const referralNft = ReferralNFT.bind(Address.fromString(REFERRAL_NFT_ADDRESS))
	let res = referralNft.try_tokenAccountOwner(tokenId)
	if (res.reverted) return Address.zero()
	return res.value
}

export function handleSetReferrer(event: SetReferrer): void {
	let entity = NFT.load(event.params.tokenId.toString())!
	entity.referrerId = event.params.referrerTokenId
	entity.lastUpdate = event.block.timestamp
	entity.accountOwner = getAccountOwner(event.params.tokenId)
	entity.save()
}

export function handleTransfer(event: Transfer): void {
	let entity = NFT.load(event.params.tokenId.toString())
	if (!entity) {
		entity = new NFT(event.params.tokenId.toString())
		entity.blockNumber = event.block.number
		entity.blockTimestamp = event.block.timestamp
	}
	entity.lastUpdate = event.block.timestamp
	entity.owner = event.params.to
	entity.accountOwner = getAccountOwner(event.params.tokenId)
	entity.save()
}
