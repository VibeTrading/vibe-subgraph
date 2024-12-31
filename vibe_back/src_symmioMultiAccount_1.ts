import {AddAccountHandler} from './handlers/symmioMultiAccount/AddAccountHandler'
import {AddAccount, RoleGranted, RoleRevoked} from '../generated/symmioMultiAccount_1/symmioMultiAccount_1'
import {EditAccountNameHandler} from './handlers/symmioMultiAccount/EditAccountNameHandler'
import {EditAccountName} from '../generated/symmioMultiAccount_1/symmioMultiAccount_1'
import {MultiAccountVersion} from '../common/BaseHandler'


export function handleAddAccount(event: AddAccount): void {
    let handler = new AddAccountHandler<AddAccount>()
    handler.handle(event, MultiAccountVersion.v_1)
}


export function handleEditAccountName(event: EditAccountName): void {
    let handler = new EditAccountNameHandler<EditAccountName>()
    handler.handle(event, MultiAccountVersion.v_1)
}


export function handleRoleGranted(event: RoleGranted): void {  // FIXME: remove later(shouldn't be needed)
}

export function handleRoleRevoked(event: RoleRevoked): void {  // FIXME: remove later(shouldn't be needed)
}
