# Libraries

Libraries are not experience, domain, or core. They are code that those services call.

`library-psps` is the port for a payment service provider. `library-rails` is the port for a payment rail. The service calls the port. A deployment supplies the adapter that talks to the outside system. `library-common-batch` schedules jobs inside a service. It is not a business port.

`firefly-parent` and `firefly-bom` define the service dependency line. The remote baseline is 26.10.6 with Jafly 26.10.20; the unpublished integration parent now selects Jafly 26.10.22. They are build and compatibility artifacts rather than business services. Read the actual effective POM and [source/release distinction](../release/train.md) before selecting a consumer version.

## Libraries

- [library-common-batch](../catalog/shared.md#library-common-batch)
- [library-psps](../catalog/shared.md#library-psps)
- [library-rails](../catalog/shared.md#library-rails)

## Platform

- [firefly-bom](../catalog/shared.md#firefly-bom)
- [firefly-parent](../catalog/shared.md#firefly-parent)
