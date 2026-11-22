/**
 * Section 02 gauge configuration.
 *
 * Groupmates: edit only the numbers and bracketed copy below. Keep the
 * bracketed text intact until real research is added.
 *
 * - `value`        numeric position on the gauge (0–`max`)
 * - `max`          value that maps to the far-right needle position
 * - `displayValue` headline text shown under the gauge
 * - `source`       provenance label shown next to the headline
 * - `comparison`   plain-language context shown below the gauge
 */
export type ImpactMeter = {
  name: string;
  value: number;
  max: number;
  displayValue: string;
  source: string;
  comparison: string;
};

export const impactMeters: ImpactMeter[] = [
  {
    name: "WATER",
    value: 72,
    max: 100,
    displayValue: "[00.0 UNIT]",
    source: "[SOURCE]",
    comparison: "≈ [0,000] homes",
  },
  {
    name: "POWER",
    value: 64,
    max: 100,
    displayValue: "[00.0 UNIT]",
    source: "[SOURCE]",
    comparison: "≈ [0,000] homes",
  },
  {
    name: "LAND",
    value: 48,
    max: 100,
    displayValue: "[00.0 UNIT]",
    source: "[SOURCE]",
    comparison: "≈ [00] city blocks",
  },
  {
    name: "LIVELIHOOD",
    value: 58,
    max: 100,
    displayValue: "[000]",
    source: "[SOURCE]",
    comparison: "[INSERT CAPTION — 1 LINE]",
  },
];
