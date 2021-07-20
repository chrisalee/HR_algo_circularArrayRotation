/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */


const circularArrayRotation = (a, k, queries) => {
  Array.from({ length: k }).forEach(() => a.unshift(a.pop()));
//   console.log(a);
  return queries.map(query => a[query]);
};
