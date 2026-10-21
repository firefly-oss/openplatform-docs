# Distributor

This page is generated from `exp-distributor-sdk/src/main/resources/openapi.yml`.
Core and domain contracts stay in each repository.
A journey call is identity, then access, then a decision only when the operation creates risk, then the domain port.
Read the path, then the example, then the panel rendered from the spec.

## GET /api/v1/experience/distributors/{distributorId}/territories/{territoryId}

Get territory.

Retrieve a single authorized territory by its identifier

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/territories/{territoryId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/territories/{territoryId}

Update territory.

Update an existing authorized territory

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/territories/{territoryId}
// schema: UpdateTerritoryRequest
{
  // countryId: string (uuid); identifier, optional
  // authorizationLevel: string, optional
  // isActive: boolean, optional
  // authorizedFrom: string (date-time), optional
  // authorizedUntil: string (date-time), optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/territories/{territoryId}

Delete territory.

Delete an authorized territory from a distributor

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/territories/{territoryId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}

Get terms detail.

Get terms and conditions detail by ID

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}

Update terms and conditions.

Update existing terms and conditions

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}
// schema: UpdateTermsRequest
{
  // title: string, optional
  // content: string, optional
  // version: string, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}

Delete terms and conditions.

Delete terms and conditions by ID

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}/status

Update shipment status.

Update the status of a shipment (e.g. SHIPPED, IN_TRANSIT, DELIVERED).

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}/status
// schema: UpdateStatusRequest
{
  // status: string, required
  // notes: string, optional
}

// response
// 200 OK
// schema: ShipmentDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // productId: string (uuid); identifier, optional
  // trackingNumber: string, optional
  // carrier: string, optional
  // status: string, optional
  // estimatedDelivery: string (date-time), optional
}
```

## GET /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}

Get shipment.

Retrieve a specific shipment by ID.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}
// no request body declared

// response
// 200 OK
// schema: ShipmentDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // productId: string (uuid); identifier, optional
  // trackingNumber: string, optional
  // carrier: string, optional
  // status: string, optional
  // estimatedDelivery: string (date-time), optional
}
```

## PUT /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}

Update shipment.

Update shipment details (carrier, tracking number, address, estimated delivery).

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}
// schema: UpdateShipmentRequest
{
  // trackingNumber: string, optional
  // carrier: string, optional
  // shippingAddress: string, optional
  // status: string, optional
  // estimatedDelivery: string (date-time), optional
}

// response
// 200 OK
// schema: ShipmentDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // productId: string (uuid); identifier, optional
  // trackingNumber: string, optional
  // carrier: string, optional
  // status: string, optional
  // estimatedDelivery: string (date-time), optional
}
```

## DELETE /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}

Delete shipment.

Delete a shipment record.

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/products/{productId}

Get product.

Retrieve a specific product by ID

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/products/{productId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/products/{productId}

Update product.

Update an existing product

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/products/{productId}
// schema: UpdateProductRequest
{
  // name: string, optional
  // description: string, optional
  // category: string, optional
  // status: string, optional
  // isActive: boolean, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/products/{productId}

Remove product.

Remove a product from the distributor

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/products/{productId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/operations/{operationId}

Update operation.

Update an existing operation

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/operations/{operationId}
// schema: UpdateOperationRequest
{
  // countryId: string (uuid); identifier, optional
  // administrativeDivisionId: string (uuid); identifier, optional
  // managedByAgentId: string (uuid); identifier, optional
  // agencyId: string (uuid); identifier, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/operations/{operationId}

Delete operation.

Delete an operation by ID

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/operations/{operationId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/configurations/{configId}

Update configuration.

Update an existing configuration

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/configurations/{configId}
// schema: UpdateConfigurationRequest
{
  // configKey: string, optional
  // configValue: string, optional
  // category: string, optional
  // description: string, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/configurations/{configId}

Delete configuration.

Delete a configuration by ID

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/configurations/{configId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}

Get catalog item.

Retrieve a specific catalog item by ID

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}

Update catalog item.

Update an existing catalog item

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}
// schema: UpdateCatalogItemRequest
{
  // productName: string, optional
  // status: string, optional
  // isActive: boolean, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}

Remove from catalog.

Remove an item from the distributor's catalog

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}/set-default

Set default branding.

Mark a branding configuration as the default for the distributor

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}/set-default
// no request body declared

// response
// 200 OK
// schema: BrandingDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // fontFamily: string, optional
  // theme: string, optional
  // isDefault: boolean, optional
}
```

## GET /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}

Get branding.

Retrieve a branding configuration by ID

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}
// no request body declared

// response
// 200 OK
// schema: BrandingDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // fontFamily: string, optional
  // theme: string, optional
  // isDefault: boolean, optional
}
```

## PUT /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}

Update branding.

Update an existing branding configuration

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}
// schema: UpdateBrandingRequest
{
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // fontFamily: string, optional
  // theme: string, optional
}

// response
// 200 OK
// schema: BrandingDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // fontFamily: string, optional
  // theme: string, optional
  // isDefault: boolean, optional
}
```

## DELETE /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}

Delete branding.

Delete a branding configuration by ID

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/brandings/{brandingId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/agents/{agentId}

Get agent.

Retrieve a single agent by its identifier

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/agents/{agentId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/agents/{agentId}

Update agent.

Update an existing agent

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/agents/{agentId}
// schema: UpdateAgentRequest
{
  // firstName: string, optional
  // lastName: string, optional
  // email: string, optional
  // employeeCode: string, optional
  // isActive: boolean, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/agents/{agentId}

Delete agent.

Delete an agent from a distributor

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/agents/{agentId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/agencies/{agencyId}

Get agency.

Retrieve a single agency by its identifier

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/agencies/{agencyId}
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/distributors/{distributorId}/agencies/{agencyId}

Update agency.

Update an existing agency

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}/agencies/{agencyId}
// schema: UpdateAgencyRequest
{
  // name: string, optional
  // code: string, optional
  // city: string, optional
  // state: string, optional
  // isActive: boolean, optional
  // isHeadquarters: boolean, optional
}

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/agencies/{agencyId}

Delete agency.

Delete an agency from a distributor

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/agencies/{agencyId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}

Get distributor detail.

Retrieve composite distributor detail: profile + active branding + T&C status

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}
// no request body declared

// response
// 200 OK
// schema: DistributorDetailDTO
{
  // id: string (uuid); identifier, optional
  // name: string, optional
  // displayName: string, optional
  // email: string, optional
  // status: string, optional
  // activeBranding: value, optional
  // hasActiveSignedTerms: boolean, optional
}
```

## PUT /api/v1/experience/distributors/{distributorId}

Update distributor.

Update the distributor profile and return the refreshed composite view

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/distributors/{distributorId}
// schema: UpdateDistributorRequest
{
  // name: string, required
  // displayName: string, required
  // email: string, required
  // phoneNumber: string, optional
  // taxId: string; identifier, optional
}

// response
// 200 OK
// schema: DistributorDetailDTO
{
  // id: string (uuid); identifier, optional
  // name: string, optional
  // displayName: string, optional
  // email: string, optional
  // status: string, optional
  // activeBranding: value, optional
  // hasActiveSignedTerms: boolean, optional
}
```

## DELETE /api/v1/experience/distributors/{distributorId}

Delete distributor.

Delete a distributor by ID

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/territories

List territories.

List all authorized territories for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/territories
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/territories

Create territory.

Create a new authorized territory for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/territories
// schema: CreateTerritoryRequest
{
  // countryId: string (uuid); identifier, required
  // authorizationLevel: string, optional
  // isActive: boolean, optional
  // authorizedFrom: string (date-time), optional
  // authorizedUntil: string (date-time), optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions

List terms and conditions.

List all terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/terms-and-conditions

Create terms and conditions.

Create new terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/terms-and-conditions
// schema: CreateTermsRequest
{
  // title: string, optional
  // content: string, optional
  // version: string, optional
  // effectiveDate: string (date-time), optional
}

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/simulations

Create simulation.

Create a new simulation for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/simulations
// schema: CreateSimulationRequest
{
  // applicationId: string (uuid); identifier, optional
  // agentId: string (uuid); identifier, optional
  // agencyId: string (uuid); identifier, optional
  // notes: string, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/shipments

List shipments.

List all shipments for a distributor, aggregated across all catalog products.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/shipments
// no request body declared

// response
// 200 OK
// no fields declared
```

## POST /api/v1/experience/distributors/{distributorId}/shipments

Register shipment.

Register a new shipment for a distributor product.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/shipments
// schema: RegisterShipmentRequest
{
  // productId: string (uuid); identifier, required
  // trackingNumber: string, optional
  // carrier: string, optional
  // shippingAddress: string, optional
  // estimatedDelivery: string (date-time), optional
}

// response
// 200 OK
// schema: ShipmentDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // productId: string (uuid); identifier, optional
  // trackingNumber: string, optional
  // carrier: string, optional
  // status: string, optional
  // estimatedDelivery: string (date-time), optional
}
```

## GET /api/v1/experience/distributors/{distributorId}/products

List products.

List all products for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/products
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/products

Register product.

Register a new product for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/products
// schema: RegisterProductRequest
{
  // name: string, required
  // description: string, optional
  // category: string, required
  // status: string, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/operations

List operations.

List all operations for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/operations
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/operations

Create operation.

Create a new operation for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/operations
// schema: CreateOperationRequest
{
  // countryId: string (uuid); identifier, optional
  // administrativeDivisionId: string (uuid); identifier, optional
  // managedByAgentId: string (uuid); identifier, optional
  // agencyId: string (uuid); identifier, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/configurations

List configurations.

List all configurations for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/configurations
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/configurations

Create configuration.

Create a new configuration for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/configurations
// schema: CreateConfigurationRequest
{
  // configKey: string, optional
  // configValue: string, optional
  // category: string, optional
  // description: string, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/catalog

List catalog items.

List all catalog items for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/catalog
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/catalog

Add to catalog.

Add a new item to the distributor's catalog

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/catalog
// schema: AddCatalogItemRequest
{
  // productId: string (uuid); identifier, required
  // productName: string, optional
  // status: string, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/brandings

List brandings.

List all branding configurations for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/brandings
// no request body declared

// response
// 200 OK
// no fields declared
```

## POST /api/v1/experience/distributors/{distributorId}/brandings

Create branding.

Create a new branding configuration for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/brandings
// schema: CreateBrandingRequest
{
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // fontFamily: string, optional
  // theme: string, optional
}

// response
// 200 OK
// schema: BrandingDTO
{
  // id: string (uuid); identifier, optional
  // distributorId: string (uuid); identifier, optional
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // fontFamily: string, optional
  // theme: string, optional
  // isDefault: boolean, optional
}
```

## GET /api/v1/experience/distributors/{distributorId}/agents

List agents.

List all agents for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/agents
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/agents

Create agent.

Create a new agent for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/agents
// schema: CreateAgentRequest
{
  // firstName: string, required
  // lastName: string, required
  // email: string, required
  // employeeCode: string, optional
  // isActive: boolean, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/agent-agencies

List assignments.

List all agent-agency assignments for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/agent-agencies
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/agent-agencies

Assign agent to agency.

Create an agent-agency assignment for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/agent-agencies
// schema: AssignAgentRequest
{
  // agentId: string (uuid); identifier, required
  // agencyId: string (uuid); identifier, required
  // roleId: string (uuid); identifier, optional
  // isPrimaryAgency: boolean, optional
}

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/agencies

List agencies.

List all agencies for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/agencies
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/distributors/{distributorId}/agencies

Create agency.

Create a new agency for a distributor

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors/{distributorId}/agencies
// schema: CreateAgencyRequest
{
  // name: string, required
  // code: string, required
  // city: string, optional
  // state: string, optional
  // isActive: boolean, optional
  // isHeadquarters: boolean, optional
}

// response
// 200 OK
```

## POST /api/v1/experience/distributors

Register distributor.

Onboard a new distributor and return the composite profile view

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/distributors
// schema: RegisterDistributorRequest
{
  // name: string, required
  // displayName: string, required
  // email: string, required
  // phoneNumber: string, optional
  // taxId: string; identifier, optional
}

// response
// 200 OK
// schema: DistributorDetailDTO
{
  // id: string (uuid); identifier, optional
  // name: string, optional
  // displayName: string, optional
  // email: string, optional
  // status: string, optional
  // activeBranding: value, optional
  // hasActiveSignedTerms: boolean, optional
}
```

## PATCH /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/sign

Sign terms and conditions.

Sign terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request PATCH /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/sign
// no request body declared

// response
// 200 OK
```

## PATCH /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/deactivate

Deactivate terms and conditions.

Deactivate terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request PATCH /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/deactivate
// no request body declared

// response
// 200 OK
```

## PATCH /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/activate

Activate terms and conditions.

Activate terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request PATCH /api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/activate
// no request body declared

// response
// 200 OK
```

## PATCH /api/v1/experience/distributors/{distributorId}/operations/{operationId}/deactivate

Deactivate operation.

Deactivate an operation for a distributor

This operation's spec does not document a separate refusal body.

```text
// request PATCH /api/v1/experience/distributors/{distributorId}/operations/{operationId}/deactivate
// no request body declared

// response
// 200 OK
```

## PATCH /api/v1/experience/distributors/{distributorId}/operations/{operationId}/activate

Activate operation.

Activate an operation for a distributor

This operation's spec does not document a separate refusal body.

```text
// request PATCH /api/v1/experience/distributors/{distributorId}/operations/{operationId}/activate
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/latest

Get latest terms.

Get the latest terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/latest
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/has-active-signed

Check active signed terms.

Check if the distributor has active signed terms and conditions

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/has-active-signed
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/active

Get active terms.

Get all active terms and conditions for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/terms-and-conditions/active
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/simulations/{simulationId}

Get simulation.

Get a simulation result by ID

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/simulations/{simulationId}
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}/tracking

Get shipment tracking.

Retrieve real-time tracking information for a shipment.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}/tracking
// no request body declared

// response
// 200 OK
// schema: ShipmentTrackingDTO
{
  // shipmentId: string (uuid); identifier, optional
  // trackingNumber: string, optional
  // carrier: string, optional
  // currentStatus: string, optional
  // events: array, optional
}
```

## GET /api/v1/experience/distributors/{distributorId}/products/active

List active products.

List all active products for a distributor

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/products/active
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/distributors/{distributorId}/operations/can-operate

Check can operate.

Check if the distributor can operate

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/distributors/{distributorId}/operations/can-operate
// no request body declared

// response
// 200 OK
```

## DELETE /api/v1/experience/distributors/{distributorId}/agent-agencies/{relationshipId}

Unassign agent.

Remove an agent-agency assignment from a distributor

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/distributors/{distributorId}/agent-agencies/{relationshipId}
// no request body declared

// response
// 200 OK
```

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/distributor/openapi.yml"></swagger-ui>
