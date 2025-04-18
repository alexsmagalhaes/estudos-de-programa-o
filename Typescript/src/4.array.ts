function sumArray(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}
