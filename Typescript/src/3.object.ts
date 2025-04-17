const obj: Record<string, number> = {
  v1: 1,
  v2: 2,
};

const obj2: { readonly v1: number; [key: string]: unknown } = {
  v1: 1,
  v2: 2,
};

// obj2.v1=2
