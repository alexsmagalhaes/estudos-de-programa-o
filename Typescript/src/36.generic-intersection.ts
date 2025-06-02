export function unionObj<obj1, obj2>(obj1: obj1, obj2: obj2) {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { value: 1 };
const obj2 = { value: 2 };

const union = unionObj(obj1, obj2);

console.log(union);
