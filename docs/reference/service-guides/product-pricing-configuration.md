# Configure exact product pricing inputs

Product pricing aggregation reads the existing product and its `product_configuration` rows. It exposes calculator inputs through `GET /api/v1/products/{productId}/pricing`; it does not accept a customer offer, assess or collect a fee, approve credit, reserve funds or post money.

Use the real category/product identifiers returned by this service and the deployment's authorized administration path. A tenant UUID in a DTO is a data field, not proof of access. The local verification fixture uses synthetic records in a newly created private database; it does not qualify production identity or cross-tenant administration.

## Parameterize the existing owner

| Configuration type/key | Value | Meaning |
| --- | --- | --- |
| `LIMITS` / `amount_term` | JSON object | Currency, minimum/maximum amount and minimum/maximum term |
| `PRICING` / `interest_rate_brackets` | JSON array | Amount brackets and nominal-rate inputs |
| `PRICING` / `fees` | JSON array | Named percentage/fixed fee inputs in the product's currency |

For example, the `configValue` string for a fictional `amount_term` row can contain:

```json
{"currency":"USD","minAmount":1000.25,"maxAmount":100000.75,"minTerm":12,"maxTerm":84}
```

Send that exact JSON serialization as the string value of `ProductConfigurationDTO.configValue`, with `configType=LIMITS` and `configKey=amount_term`. Create the row through `ProductConfigurationApi.createConfiguration(productId, input, null)`. For changes, use its returned configuration UUID with `updateConfiguration`; the route product remains the parent owner. Use the matching generated SDK rather than importing the producer's repository or entity.

The rate and fee structures retain their typed fields, for example:

```json
[{"minAmount":1000.25,"maxAmount":100000.75,"tin":5.25}]
```

```json
[{"type":"OPENING_FEE","percentage":1.0,"fixed":10.00}]
```

These are fictional configuration examples. Their mathematical/business applicability, accepted version, rounding, tax, waivers, customer disclosure and eventual accounting must be established by the actual product/pricing/financial journey. A stored percentage is not a collected commission.

## Preserve numeric meaning

Untyped LIMITS monetary numbers are read as exact decimal/integer values before conversion to the BigDecimal response fields. They do not pass through a binary floating-point approximation. Typed rate/fee monetary fields keep their existing BigDecimal mappings. Consumers must retain those decimal types when calculating or serializing downstream values.

Term fields use the existing signed32-bit Integer response. Numeric terms must be mathematically integral and representable: `12`, `12.0` and `1.2e1` mean12; `12.75` and `4294967297` reject. Existing integer strings such as `"96"` remain compatible. This is representability, not approval of every signed integer as a valid product term; the owning product rules must enforce their business bounds.

Malformed JSON or unsupported numeric values return the existing `PRODUCT_CONFIG_PARSE_ERROR` with HTTP502. The public message identifies the product and omits raw configuration content. A caller should repair the source configuration through its owner and reread it; retrying unchanged malformed data cannot correct it. Repository failures remain separate from this local parse contract.

Missing optional configuration rows leave their associated fields empty; they do not turn the product into a fully priced offer. `GET /api/v1/products/with-pricing` lists ACTIVE products and may omit products whose configuration cannot be read. An empty listing is therefore not evidence that the entire catalog was priced successfully. An exact product read exposes its availability flag separately.

## Version and recovery boundaries

These configuration rows remain mutable. This read API does not retain an immutable accepted quote or a versioned fee assessment. A business transaction must not reread a changed row and treat it as the originally accepted price. The financial extension must retain its actual policy/version, amounts/currency/rounding, approval/action identity, assessment and posting references, including refund/reversal and uncertain-result recovery.

Current product records replace previously removed fee/pricing tables with generic configuration rows. Do not recreate deleted schemas merely to match old domain class names. Reuse actual owners and add an explicitly reviewed immutable authority where the required business contract is absent.

## Reproduce verification

Run the normal configured reactor with Java25 and Maven:

```sh
mvn -B verify -DskipOpenApiGen
```

This generates SDK Java from the checked-in producer input but omits the exclusive-port application specification refresh. A current application-generated contract is a separate gate when the API changes. `-Dcodegen.skip=true` is appropriate for selected implementation checks; a resulting SDK archive with no generated classes is not evidence of SDK adoption.

The maintained private qualifier compiles a real SDK consumer, copies the executable/SDK, starts a new loopback PostgreSQL database, creates category/product/configuration records through SDK calls, reads exact decimals and rejects invalid terms, then restarts the executable and reads the persisted configuration again:

```sh
python3 scripts/qualify-product-pricing.py \
  --executable core-common-product-mgmt-web/target/core-common-product-mgmt.jar \
  --sdk core-common-product-mgmt-sdk/target/core-common-product-mgmt-sdk-26.10.6.jar \
  --sdk-support-jar /path/to/jackson-databind-nullable-0.2.8.jar \
  --output-dir /path/to/new-private-pricing-evidence
```

Set `JAVA_HOME` to Java25 and configure the local Docker runtime through `DOCKER_HOST` where required. Supply SDK runtime support archives from its declared dependencies when they are absent from the application; the nullable module above is required by the generated ApiClient. Each supplied archive is copied and hashed. The output directory must be new. The qualifier never connects to a supplied database; it creates and removes its own container, binds the application/database to loopback random ports, and retains input hashes and logs. No SQL business-data seeds or production credentials are required. Its private bootstrap/database role and synthetic master-data workflow do not establish production security, a complete product journey or financial posting.
