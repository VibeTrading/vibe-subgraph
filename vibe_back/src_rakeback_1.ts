import {VibeVersion} from '../common/BaseHandler'
import {VolumeRakebackTierAddedHandler} from './handlers/rakeback/VolumeRakebackTierAddedHandler'
import {RoleGranted, RoleRevoked, VolumeRakebackTierAdded} from '../generated/rakeback_1/rakeback_1'
import {VolumeRakebackTierRemovedHandler} from './handlers/rakeback/VolumeRakebackTierRemovedHandler'
import {VolumeRakebackTierRemoved} from '../generated/rakeback_1/rakeback_1'
import {VolumeRakebackTierUpdatedHandler} from './handlers/rakeback/VolumeRakebackTierUpdatedHandler'
import {VolumeRakebackTierUpdated} from '../generated/rakeback_1/rakeback_1'


export function handleVolumeRakebackTierAdded(event: VolumeRakebackTierAdded): void {
    let handler = new VolumeRakebackTierAddedHandler<VolumeRakebackTierAdded>()
    handler.handle(event, VibeVersion.v_1)
}


export function handleVolumeRakebackTierRemoved(event: VolumeRakebackTierRemoved): void {
    let handler = new VolumeRakebackTierRemovedHandler<VolumeRakebackTierRemoved>()
    handler.handle(event, VibeVersion.v_1)
}


export function handleVolumeRakebackTierUpdated(event: VolumeRakebackTierUpdated): void {
    let handler = new VolumeRakebackTierUpdatedHandler<VolumeRakebackTierUpdated>()
    handler.handle(event, VibeVersion.v_1)
}


export function handleRoleGranted(event: RoleGranted): void {  // FIXME: remove later(shouldn't be needed)
}

export function handleRoleRevoked(event: RoleRevoked): void {  // FIXME: remove later(shouldn't be needed)
}
