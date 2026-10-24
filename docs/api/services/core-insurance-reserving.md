# core-insurance-reserving

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-reserving) · [Complete contract](../contracts/core-insurance-reserving/openapi.yml)

**Provenance:** base revision `ecbe1450bdc5eac8689ded8a8619110416edf06d`; current copied input SHA256 `7efe0685074ea773eaed03e35679524d4bc3776572d0919af0497b67f0e09ac9`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-reserving/blob/ecbe1450bdc5eac8689ded8a8619110416edf06d/core-insurance-reserving-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/snapshots/{reserveSnapshotId}` | `getReserveSnapshotById` | `200`, `404` |
| `PUT` | `/api/v1/snapshots/{reserveSnapshotId}` | `updateReserveSnapshot` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/snapshots/{reserveSnapshotId}` | `deleteReserveSnapshot` | `204`, `404` |
| `GET` | `/api/v1/snapshots/{reserveSnapshotId}/extracts/{reportingExtractId}` | `getReportingExtractById` | `200`, `404` |
| `PUT` | `/api/v1/snapshots/{reserveSnapshotId}/extracts/{reportingExtractId}` | `updateReportingExtract` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/snapshots/{reserveSnapshotId}/extracts/{reportingExtractId}` | `deleteReportingExtract` | `204`, `404` |
| `GET` | `/api/v1/snapshots/{reserveSnapshotId}/cells/{triangleCellId}` | `getTriangleCellById` | `200`, `404` |
| `PUT` | `/api/v1/snapshots/{reserveSnapshotId}/cells/{triangleCellId}` | `updateTriangleCell` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/snapshots/{reserveSnapshotId}/cells/{triangleCellId}` | `deleteTriangleCell` | `204`, `404` |
| `POST` | `/api/v1/snapshots` | `createReserveSnapshot` | `201`, `400` |
| `POST` | `/api/v1/snapshots/{reserveSnapshotId}/extracts` | `createReportingExtract` | `201`, `400` |
| `POST` | `/api/v1/snapshots/{reserveSnapshotId}/extracts/filter` | `filterReportingExtracts` | `200`, `400` |
| `POST` | `/api/v1/snapshots/{reserveSnapshotId}/cells` | `createTriangleCell` | `201`, `400` |
| `POST` | `/api/v1/snapshots/{reserveSnapshotId}/cells/filter` | `filterTriangleCells` | `200`, `400` |
| `POST` | `/api/v1/snapshots/filter` | `filterReserveSnapshots` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FilterOptions`, `FilterRequestReportingExtractDTO`, `FilterRequestReserveSnapshotDTO`, `FilterRequestTriangleCellDTO`, `PaginationRequest`, `PaginationResponseReportingExtractDTO`, `PaginationResponseReserveSnapshotDTO`, `PaginationResponseTriangleCellDTO`, `RangeFilter`, `RangeObject`, `ReportingExtractDTO`, `ReserveSnapshotDTO`, `TriangleCellDTO`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-reserving/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
