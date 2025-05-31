const arrayGeneric: Array<number> = [1];

async function promiseAsync() {
  return 1;
}

type TPromisse = number;

function testPromise(): Promise<TPromisse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((res) => console.log(res));
