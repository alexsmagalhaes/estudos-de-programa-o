type TFilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

function customFilter<T>(array: T[], callbackFn: TFilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) newArray.push(array[i]);
  }

  return newArray;
}

const arrayData = [2, 192];

const arrayItens = customFilter(arrayData, (value) => value > 10);
console.log(arrayItens);
