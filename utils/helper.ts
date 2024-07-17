export function arrayRange(length: number): number[] {
  return Array.apply(null, { length: length } as any).map(
    Number.call,
    Number
  ) as any;
}

export function alphabets(length: number) {
  return arrayRange(length).map((num) => String.fromCharCode(97 + num));
}
