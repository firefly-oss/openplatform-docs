# Profile

Ada reads who she is, and she reads the agreements she holds. Access is checked before either read. A denied caller gets nothing. The agreement list is not stored in the profile. Each row is fetched from the contract service, and the product name is fetched from the product on that agreement.

Her party id is `11111111-1111-4111-8111-111111111111`. Agreement `10000000-0000-4000-8000-000000000021` is in the list only when the contract service holds it for her. That is the Horizon Personal Loan the document prints.
Source: the sandbox sample is 250,000.00 EUR. The profile returns the number, the status, and the product. It does not return the printed pages.

The service listens on port 8103.

```text
// GET /api/v1/experience/profile/11111111-1111-4111-8111-111111111111
// Access must allow READ on PARTY. The body is her person record.

// GET /api/v1/experience/profile/11111111-1111-4111-8111-111111111111/contracts
// one item when the contract service has the sandbox agreement
{
  // contractId: 10000000-0000-4000-8000-000000000021
  // type: the contract number
  // status: the contract status
  // signedAt: when it was signed
  // productId: 10000000-0000-4000-8000-000000000202
  // productName: Horizon Personal Loan
  // productCode: the code on that product
}
```

A change of personal data is `PATCH .../personal-data`. If a later step of that change fails, the previous row is written back. Addresses, consents, and identity documents are the other paths on the same party.

The panel is the OpenAPI file from `exp-profile`. Read the example, then open the operation.

<swagger-ui src="specs/profile/openapi.yml"></swagger-ui>
