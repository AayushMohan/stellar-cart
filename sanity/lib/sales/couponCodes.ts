export const COUPON_CODES = {
 NYR: "NYR",
 XMAS: "XMAS",
 EASTER: "EASTER",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;