import { withBasePath } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Product screenshot media config for marketing.
 * Files live under public/images/screenshots/{locale}/.
 * Mark `available: true` only when the file exists for both locales.
 *
 * Mapping:
 * - students → students.png
 * - academics → schedule.png
 * - attendance → grades.png
 * - finance → accounting.png
 * - hr → employees.png
 * - supervision → supervision.png
 * - operations → behavior.png
 * - permissions → permissions.png
 * - dashboard → dashboard.png
 * - studentPortal → student-portal.png
 * - guardianPortal → guardian-portal.png
 * - voice → voice.png
 * - transportation → transportation.png
 * - library → library.png
 */
const hdSlot = {
  recommendedWidth: 1920,
  recommendedHeight: 950,
} as const;

function resolveScreenshotLocale(locale: string): Locale {
  return locale === "en" || locale === "ar" ? locale : routing.defaultLocale;
}

function shot(locale: Locale, file: string) {
  return withBasePath(`/images/screenshots/${locale}/${file}`);
}

export const productScreenshots = {
  dashboard: {
    file: "dashboard.png",
    available: true,
    width: 1024,
    height: 506,
    aspectRatio: "1024 / 506",
    ...hdSlot,
  },
  students: {
    file: "students.png",
    available: true,
    width: 1911,
    height: 948,
    aspectRatio: "1911 / 948",
    ...hdSlot,
  },
  academics: {
    file: "schedule.png",
    available: true,
    width: 1911,
    height: 948,
    aspectRatio: "1911 / 948",
    ...hdSlot,
  },
  attendance: {
    file: "grades.png",
    available: true,
    width: 1911,
    height: 949,
    aspectRatio: "1911 / 949",
    ...hdSlot,
  },
  finance: {
    file: "accounting.png",
    available: true,
    width: 1911,
    height: 949,
    aspectRatio: "1911 / 949",
    ...hdSlot,
  },
  hr: {
    file: "employees.png",
    available: true,
    width: 1911,
    height: 957,
    aspectRatio: "1911 / 957",
    ...hdSlot,
  },
  supervision: {
    file: "supervision.png",
    available: true,
    width: 1911,
    height: 957,
    aspectRatio: "1911 / 957",
    ...hdSlot,
  },
  operations: {
    file: "behavior.png",
    available: true,
    width: 1911,
    height: 957,
    aspectRatio: "1911 / 957",
    ...hdSlot,
  },
  permissions: {
    file: "permissions.png",
    available: true,
    width: 1911,
    height: 957,
    aspectRatio: "1911 / 957",
    ...hdSlot,
  },
  studentPortal: {
    file: "student-portal.png",
    available: true,
    width: 1899,
    height: 952,
    aspectRatio: "1899 / 952",
    ...hdSlot,
  },
  guardianPortal: {
    file: "guardian-portal.png",
    available: true,
    width: 1899,
    height: 952,
    aspectRatio: "1899 / 952",
    ...hdSlot,
  },
  voice: {
    file: "voice.png",
    available: true,
    width: 1024,
    height: 530,
    aspectRatio: "1024 / 530",
    ...hdSlot,
  },
  transportation: {
    file: "transportation.png",
    available: true,
    width: 1024,
    height: 532,
    aspectRatio: "1024 / 532",
    ...hdSlot,
  },
  library: {
    file: "library.png",
    available: true,
    width: 1024,
    height: 533,
    aspectRatio: "1024 / 533",
    ...hdSlot,
  },
} as const;

export type ProductScreenshotKey = keyof typeof productScreenshots;

export function getProductScreenshot(
  key: ProductScreenshotKey,
  locale: string,
) {
  const meta = productScreenshots[key];
  const resolvedLocale = resolveScreenshotLocale(locale);
  return {
    ...meta,
    src: shot(resolvedLocale, meta.file),
  };
}
