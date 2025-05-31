type ObjectKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const objectKeyTest: ObjectKeyFn = (object, key) => object[key];

const animalObj = {
  name: "dog",
  age: 12,
};

objectKeyTest(animalObj, "name");
