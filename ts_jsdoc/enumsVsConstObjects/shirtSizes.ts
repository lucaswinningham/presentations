export const ShirtSizes = { small: 'SM', medium: 'MD', large: 'LG' } as const;
// type ShirtSizes = "SM" | "MD" | "LG"
export type ShirtSizes = typeof ShirtSizes[keyof typeof ShirtSizes];
export namespace ShirtSizes {
  export type small = typeof ShirtSizes.small;
  export type medium = typeof ShirtSizes.medium;
  export type large = typeof ShirtSizes.large;
}