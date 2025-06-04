export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

export function sum<T>(...args: T[]): number | null {
  const total = args.reduce((acc, value) => {
    if (isNumber(value)) {
      return acc + value;
    }
    return acc;
  }, 0);

  return total === 0 ? null : total;
}

console.log(sum(...[1, 2, 3]));
