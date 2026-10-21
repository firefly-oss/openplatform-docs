# Libraries

Libraries are not experience, domain, or core. They are code that those services call.

`library-psps` is the port for a payment service provider. `library-rails` is the port for a payment rail. The service calls the port. A deployment supplies the adapter that talks to the outside system. `library-common-batch` schedules jobs inside a service. It is not a business port.

`firefly-parent` and `firefly-bom` pin train 26.10.3. They are platform artifacts, documented here so the layer list matches the release list. Version detail is on [Train](../release/train.md).

## Libraries

- [library-common-batch](../catalog/shared.md#library-common-batch)
- [library-psps](../catalog/shared.md#library-psps)
- [library-rails](../catalog/shared.md#library-rails)

## Platform

- [firefly-bom](../catalog/shared.md#firefly-bom)
- [firefly-parent](../catalog/shared.md#firefly-parent)
