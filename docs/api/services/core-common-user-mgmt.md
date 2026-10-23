# core-common-user-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-user-mgmt) · [Complete contract](../contracts/core-common-user-mgmt/openapi.yml)

**Provenance:** base revision `655b867a35b951d76fa9f14ea355b0dbc851ac75`; current copied input SHA256 `749301018f09895f806fad69b2e63c6314dbad4ea66ad13dfc092537f3b21f85`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-user-mgmt/blob/655b867a35b951d76fa9f14ea355b0dbc851ac75/core-common-user-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/users/{userId}` | `getUserAccountById` | `200`, `404` |
| `PUT` | `/api/v1/users/{userId}` | `updateUserAccount` | `200`, `404` |
| `DELETE` | `/api/v1/users/{userId}` | `deleteUserAccount` | `204`, `404` |
| `GET` | `/api/v1/roles/{roleId}` | `getRoleById` | `200`, `404` |
| `PUT` | `/api/v1/roles/{roleId}` | `updateRole` | `200`, `404` |
| `DELETE` | `/api/v1/roles/{roleId}` | `deleteRole` | `204`, `404` |
| `GET` | `/api/v1/permissions/{permissionId}` | `getPermissionById` | `200`, `404` |
| `PUT` | `/api/v1/permissions/{permissionId}` | `updatePermission` | `200`, `404` |
| `DELETE` | `/api/v1/permissions/{permissionId}` | `deletePermission` | `204`, `404` |
| `GET` | `/api/v1/external-identities/{externalIdentityId}` | `getUserExternalIdentityById` | `200`, `404` |
| `PUT` | `/api/v1/external-identities/{externalIdentityId}` | `updateUserExternalIdentity` | `200`, `404` |
| `DELETE` | `/api/v1/external-identities/{externalIdentityId}` | `deleteUserExternalIdentity` | `204`, `404` |
| `GET` | `/api/v1/users/{userId}/roles` | `getRolesByUserId` | `200`, `404` |
| `POST` | `/api/v1/users/{userId}/roles` | `assignRoleToUser` | `201`, `404` |
| `GET` | `/api/v1/users/{userId}/external-identities` | `getExternalIdentitiesByUserId` | `200`, `404` |
| `POST` | `/api/v1/users/{userId}/external-identities` | `linkExternalIdentityToUser` | `201`, `404` |
| `POST` | `/api/v1/users/filter` | `filterUserAccounts` | `200` |
| `POST` | `/api/v1/users` | `createUserAccount` | `201` |
| `POST` | `/api/v1/user-roles/filter` | `filterUserRoles` | `200` |
| `POST` | `/api/v1/user-roles` | `createUserRole` | `201` |
| `GET` | `/api/v1/roles/{roleId}/permissions` | `getPermissionsByRoleId` | `200`, `404` |
| `POST` | `/api/v1/roles/{roleId}/permissions` | `assignPermissionToRole` | `201`, `404` |
| `POST` | `/api/v1/roles/filter` | `filterRoles` | `200` |
| `POST` | `/api/v1/roles` | `createRole` | `201` |
| `POST` | `/api/v1/role-permissions/filter` | `filterRolePermissions` | `200` |
| `POST` | `/api/v1/role-permissions` | `createRolePermission` | `201` |
| `POST` | `/api/v1/permissions/filter` | `filterPermissions` | `200` |
| `POST` | `/api/v1/permissions` | `createPermission` | `201` |
| `POST` | `/api/v1/external-identities/filter` | `filterUserExternalIdentities` | `200` |
| `POST` | `/api/v1/external-identities` | `createUserExternalIdentity` | `201` |
| `POST` | `/api/v1/audit-logs/filter` | `filterAuditLogs` | `200` |
| `GET` | `/api/v1/user-roles/{userRoleId}` | `getUserRoleById` | `200`, `404` |
| `DELETE` | `/api/v1/user-roles/{userRoleId}` | `deleteUserRole` | `204`, `404` |
| `GET` | `/api/v1/role-permissions/{rolePermissionId}` | `getRolePermissionById` | `200`, `404` |
| `DELETE` | `/api/v1/role-permissions/{rolePermissionId}` | `deleteRolePermission` | `204`, `404` |
| `GET` | `/api/v1/audit-logs/{auditLogId}` | `getAuditLogById` | `200`, `404` |
| `GET` | `/api/v1/audit-logs/users/{userId}` | `getAuditLogsByUserId` | `200` |
| `GET` | `/api/v1/audit-logs/resources/{resourceType}/{resourceId}` | `getAuditLogsByResource` | `200` |
| `DELETE` | `/api/v1/users/{userId}/roles/{roleId}` | `removeRoleFromUser` | `204`, `404` |
| `DELETE` | `/api/v1/users/{userId}/external-identities/{externalIdentityId}` | `unlinkExternalIdentityFromUser` | `204`, `404` |
| `DELETE` | `/api/v1/roles/{roleId}/permissions/{permissionId}` | `removePermissionFromRole` | `204`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AuditLogDTO`, `FilterOptions`, `FilterRequestAuditLogDTO`, `FilterRequestPermissionDTO`, `FilterRequestRoleDTO`, `FilterRequestRolePermissionDTO`, `FilterRequestUserAccountDTO`, `FilterRequestUserExternalIdentityDTO`, `FilterRequestUserRoleDTO`, `JsonNode`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseRolePermissionDTO`, `PaginationResponseUserExternalIdentityDTO`, `PaginationResponseUserRoleDTO`, `PermissionDTO`, `RangeFilter`, `RangeObject`, `RoleDTO`, `RolePermissionDTO`, `UserAccountDTO`, `UserExternalIdentityDTO`, `UserRoleDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-user-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
