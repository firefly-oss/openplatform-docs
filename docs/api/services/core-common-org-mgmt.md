# core-common-org-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-org-mgmt) · [Complete contract](../contracts/core-common-org-mgmt/openapi.yml)

**Provenance:** base revision `c3f62b56e33cddadb76085be4869aa02508d2213`; current copied input SHA256 `4b89a24fbbd76fff65796f361986d6e0c9c57b52884fb0a3e781db72a2bf3419`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-org-mgmt/blob/c3f62b56e33cddadb76085be4869aa02508d2213/core-common-org-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/holidays/{holidayId}` | `getBankHolidayById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/holidays/{holidayId}` | `updateBankHoliday` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/holidays/{holidayId}` | `deleteBankHoliday` | `204`, `404`, `500` |
| `GET` | `/api/v1/branches/{branchId}/hours/{hoursId}` | `getBranchHoursById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/branches/{branchId}/hours/{hoursId}` | `updateBranchHours` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/branches/{branchId}/hours/{hoursId}` | `deleteBranchHours` | `204`, `404`, `500` |
| `GET` | `/api/v1/branches/{branchId}/departments/{departmentId}/positions/{positionId}` | `getBranchPositionById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/branches/{branchId}/departments/{departmentId}/positions/{positionId}` | `updateBranchPosition` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/branches/{branchId}/departments/{departmentId}/positions/{positionId}` | `deleteBranchPosition` | `204`, `404`, `500` |
| `GET` | `/api/v1/branches/{branchId}/departments/{departmentId}` | `getBranchDepartmentById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/branches/{branchId}/departments/{departmentId}` | `updateBranchDepartment` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/branches/{branchId}/departments/{departmentId}` | `deleteBranchDepartment` | `204`, `404`, `500` |
| `GET` | `/api/v1/branches/{branchId}` | `getBranchById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/branches/{branchId}` | `updateBranch` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/branches/{branchId}` | `deleteBranch` | `204`, `404`, `500` |
| `GET` | `/api/v1/banks/{bankId}/divisions/{divisionId}/regions/{regionId}` | `getBankRegionById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/banks/{bankId}/divisions/{divisionId}/regions/{regionId}` | `updateBankRegion` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/banks/{bankId}/divisions/{divisionId}/regions/{regionId}` | `deleteBankRegion` | `204`, `404`, `500` |
| `GET` | `/api/v1/banks/{bankId}/divisions/{divisionId}` | `getBankDivisionById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/banks/{bankId}/divisions/{divisionId}` | `updateBankDivision` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/banks/{bankId}/divisions/{divisionId}` | `deleteBankDivision` | `204`, `404`, `500` |
| `GET` | `/api/v1/banks/{bankId}/calendars/{calendarId}/assignments/{assignmentId}` | `getCalendarAssignmentById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/banks/{bankId}/calendars/{calendarId}/assignments/{assignmentId}` | `updateCalendarAssignment` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/banks/{bankId}/calendars/{calendarId}/assignments/{assignmentId}` | `deleteCalendarAssignment` | `204`, `404`, `500` |
| `GET` | `/api/v1/banks/{bankId}/calendars/{calendarId}` | `getWorkingCalendarById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/banks/{bankId}/calendars/{calendarId}` | `updateWorkingCalendar` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/banks/{bankId}/calendars/{calendarId}` | `deleteWorkingCalendar` | `204`, `404`, `500` |
| `GET` | `/api/v1/banks/{bankId}/branches/{branchId}` | `getBranchByIdForBank` | `200`, `404`, `500` |
| `PUT` | `/api/v1/banks/{bankId}/branches/{branchId}` | `updateBranchForBank` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/banks/{bankId}/branches/{branchId}` | `deleteBranchForBank` | `204`, `404`, `500` |
| `GET` | `/api/v1/banks/{bankId}` | `getBankById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/banks/{bankId}` | `updateBank` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/banks/{bankId}` | `deleteBank` | `204`, `404`, `500` |
| `POST` | `/api/v1/holidays/filter` | `filterBankHolidays` | `200`, `400`, `500` |
| `POST` | `/api/v1/holidays` | `createBankHoliday` | `201`, `400`, `500` |
| `POST` | `/api/v1/branches/{branchId}/hours/filter` | `filterBranchHours` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/branches/{branchId}/hours` | `createBranchHours` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/branches/{branchId}/departments/{departmentId}/positions/filter` | `filterBranchPositions` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/branches/{branchId}/departments/{departmentId}/positions` | `createBranchPosition` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/branches/{branchId}/departments/filter` | `filterBranchDepartments` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/branches/{branchId}/departments` | `createBranchDepartment` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/branches/filter` | `filterBranches` | `200`, `400`, `500` |
| `POST` | `/api/v1/branches` | `createBranch` | `201`, `400`, `500` |
| `POST` | `/api/v1/banks/{bankId}/divisions/{divisionId}/regions/filter` | `filterBankRegions` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/divisions/{divisionId}/regions` | `createBankRegion` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/divisions/filter` | `filterBankDivisions` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/divisions` | `createBankDivision` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/calendars/{calendarId}/assignments/filter` | `filterCalendarAssignments` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/calendars/{calendarId}/assignments` | `createCalendarAssignment` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/calendars/filter` | `filterWorkingCalendars` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/calendars` | `createWorkingCalendar` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/branches/filter` | `filterBranchesForBank` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/{bankId}/branches` | `createBranchForBank` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/banks/filter` | `filterBanks` | `200`, `400`, `500` |
| `POST` | `/api/v1/banks` | `createBank` | `201`, `400`, `500` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BankDTO`, `BankDivisionDTO`, `BankHolidayDTO`, `BankRegionDTO`, `BranchDTO`, `BranchDepartmentDTO`, `BranchHoursDTO`, `BranchPositionDTO`, `CalendarAssignmentDTO`, `FilterOptions`, `FilterRequestBankDTO`, `FilterRequestBankDivisionDTO`, `FilterRequestBankHolidayDTO`, `FilterRequestBankRegionDTO`, `FilterRequestBranchDTO`, `FilterRequestBranchDepartmentDTO`, `FilterRequestBranchHoursDTO`, `FilterRequestBranchPositionDTO`, `FilterRequestCalendarAssignmentDTO`, `FilterRequestWorkingCalendarDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseBankDTO`, `PaginationResponseBankDivisionDTO`, `PaginationResponseBankHolidayDTO`, `PaginationResponseBankRegionDTO`, `PaginationResponseBranchDTO`, `PaginationResponseBranchDepartmentDTO`, `PaginationResponseBranchHoursDTO`, `PaginationResponseBranchPositionDTO`, `PaginationResponseCalendarAssignmentDTO`, `PaginationResponseWorkingCalendarDTO`, `RangeFilter`, `RangeObject`, `WorkingCalendarDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-org-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
