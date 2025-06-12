export const obj: Record<string, string | number> = {
  name: "Alex",
  age: 23,
};

type PersonProtocol = {
  name: string;
  age: number;
};

type PersonRequired = Required<PersonProtocol>;

export const obj2: PersonRequired = {
  name: "Ana",
  age: 17,
};

type PersonPartial = Partial<PersonProtocol>;

export const obj3: PersonPartial = {
  name: "Joao",
  age: 26,
};

type PersonReadOnly = Readonly<PersonProtocol>;

export const obj4: PersonReadOnly = {
  name: "Jose",
  age: 22,
};

type PersonReadPick = Pick<PersonProtocol, "name">;

export const obj5: PersonReadPick = {
  name: "Jose",
};

type ABCD = "A" | "B" | "C" | "D";
type DEF = "D" | "E" | "F";

type TypeExclude = Exclude<ABCD, DEF>;
type TypeExtract = Extract<ABCD, DEF>;
