import { VolumeRakebackTierAdded, VolumeRakebackTierRemoved, VolumeRakebackTierUpdated } from "../generated/Rakeback/Rakeback"
import { VolumeRakebackTier } from "../generated/schema"

export function handleVolumeRakebackTierAdded(event: VolumeRakebackTierAdded): void {
	let entity = new VolumeRakebackTier(event.params.index.toString())
	entity.addedTimestamp = event.block.timestamp
	entity.maxVolume = event.params.maxVolume
	entity.rakebackRatio = event.params.rakebackRatio
	entity.save()
}

export function handleVolumeRakebackTierUpdated(event: VolumeRakebackTierUpdated): void {
	let entity = VolumeRakebackTier.load(event.params.index.toString())!
	entity.removedTimestamp = event.block.timestamp
	entity.id = event.params.index.toString() + "_" + event.block.timestamp.toString()
	entity.save()

	let newEntity = VolumeRakebackTier.load(event.params.index.toString())!
	newEntity.addedTimestamp = event.block.timestamp
	newEntity.maxVolume = event.params.maxVolume
	newEntity.rakebackRatio = event.params.rakebackRatio
	newEntity.save()
}

export function handleVolumeRakebackTierRemoved(event: VolumeRakebackTierRemoved): void {
	let entity = VolumeRakebackTier.load(event.params.index.toString())!
	entity.removedTimestamp = event.block.timestamp
	entity.id = event.params.index.toString() + "_" + event.block.timestamp.toString()
	entity.save()

	let entityOld = VolumeRakebackTier.load(event.params.index.toString())!
	entityOld.addedTimestamp = null
	entityOld.rakebackRatio = null
	entityOld.maxVolume = null
	entityOld.removedTimestamp = null
	entityOld.save()
}
