# Convert rail amounts without losing information

`Money` retains an immutable nonnegative `BigDecimal` and a `Currency` symbol. A symbol does not define an admitted payment currency, settlement scale, maximum amount or provider capability. Resolve those from the owning currency/product/rail policy before invoking an adapter. Payment admission separately requires a positive amount; a zero value object is not permission to submit a zero payment.

## Select and retain the scale

Use `toMinorUnitsExact(int fractionDigits)` when a provider protocol accepts an integer unit count, and `Money.fromMinorUnits(long units, Currency currency, int fractionDigits)` to decode it. The explicit supported helper range is0..18. This is an arithmetic bound, not a registry of currency decimal policies. Do not accept an arbitrary customer-provided scale or guess it from the number of displayed decimals.

```java
// These scales must already have been admitted by the owning deployment policy.
Money dollars = new Money(new BigDecimal("12.34"), Currency.USD);
long dollarUnits = dollars.toMinorUnitsExact(2); // 1234
Money decodedDollars = Money.fromMinorUnits(dollarUnits, Currency.USD, 2);

Money yen = new Money(new BigDecimal("100"), Currency.JPY);
long yenUnits = yen.toMinorUnitsExact(0); // 100
```

Retain the exact currency, scale, policy/version, amount and provider instruction identity with the admitted instruction. This helper does not create that journal or prove that a provider accepted the instruction. Each actual adapter must map its protocol using its declared capability and return authenticated evidence.

## Reject loss before submission

The conversion never rounds or truncates. Fractional minor units and values above `Long.MAX_VALUE` raise `ArithmeticException`. Unsupported scales raise `IllegalArgumentException`; negative decoded units and missing currency are rejected by the existing constructor. The original `Money` amount and its scale remain unchanged.

| Input | Requested scale | Result |
| --- | --- | --- |
| `12.340000` |2|1234; trailing zeros do not change value |
| `100` |0|100 |
| `0.001` |2|Reject fractional units |
| `92233720368547758.07` |2|`Long.MAX_VALUE` |
| `92233720368547758.08` |2|Reject overflow |

Nonzero exponent extremes reject before expanding a large power of ten. A bounded integer conversion must not turn invalid input into a large temporary allocation. Larger business balances may legitimately exceed this helper's integer protocol range; they require a separately supported exact provider format rather than narrowing or wrapping.

Catch conversion errors at the adapter boundary before submission and return the owning operation's explicit invalid-input result. Do not round and continue, retry using a changed amount, or report payment success. Any required price/fee/tax rounding belongs to an approved calculation policy before the exact amount is admitted.

## Migrate the legacy cent methods

`fromCents` and `toCents` remain available and are deprecated. Both retain a fixed hundredths meaning for every enum symbol; they never become currency-aware automatically. For example, legacy `fromCents(100, JPY)` still represents1JPY and `new Money(100, JPY).toCents()` still returns10000. Migrate deliberately using the actual admitted scale.

`toCents` now rejects fractional cents and overflow instead of silently truncating or wrapping. Exact existing conversions retain their numeric values. `fromCents` also retains its original `BigDecimal` scale behavior, preserving equality for existing constructed values. New `fromMinorUnits` explicitly retains the requested scale. Compare monetary numeric values deliberately when comparing representations with different trailing zeros.

Search all project adapters for the deprecated aliases, identify the actual provider unit contract, update each mapping and qualify actual request/response round trips. Rebuilding the library does not prove downstream adoption. Do not change an admitted historical instruction's scale during recovery.

## Verify the boundary

Run the repository's normal `mvn verify` with the required JDK and matching parent dependencies. The focused `MoneyExactConversionTest` covers existing truncation/overflow failures, every supported explicit scale, signed-long boundaries, incompatible fractions, zero, trailing-zero/equality compatibility and exponent extremes. Existing library tests separately cover domain/controller/configuration fixtures.

Configuration health reports configuration availability; it does not contact a bank or prove rail connectivity. Concrete provider health, durable sandbox submission/settlement/returns, exact monetary accounting and end-to-end SDK integration require their own executable qualification. No provider implementation is added by these conversion methods.
