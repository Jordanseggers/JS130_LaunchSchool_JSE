function foo(arr) {
  let one = arr[0];
  let three = arr[2];
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array); // [3, 5, 1]
//let [ bar, qux, baz ] = result;
let bar = result[0];
let quz = result[1];
let baz = result[2];