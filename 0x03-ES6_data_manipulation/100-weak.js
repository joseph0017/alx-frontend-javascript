export const weakMap = new WeakMap();
let counter = 1;

export function queryAPI(apiEndpoint) {
  const api = weakMap.set(apiEndpoint, counter);
  counter += 1;

  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    api.get(apiEndpoint);
  }
}
